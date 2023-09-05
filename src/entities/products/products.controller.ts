import { 
Controller,
Post,
Get,
Param,
Body,
Delete,
Patch,
Query,
UseInterceptors,
UploadedFile,
Request,
UseGuards
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { OrderService } from '../order/order.service';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/utils/S3Service';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
// import { S3Service } from 'src/utils/S3Service';

@Controller('products')
export class ProductsController {
    constructor(
    private productsService: ProductsService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
    private readonly s3Service: S3Service,
    ) {}

    // add find by batch
    @Get('batch')
    async findByBatch(@Query('ids') _ids: string) {
      const ids = _ids.split(',') || []
      const response = await this.productsService.findByBatch(ids);
      return await Promise.all(
        response.map(async (item) => {
          return {
            ...item,
            photo: await this.s3Service.getFile(item.photo) || '',  
          }
        })
      );
    }
    
    @Get()
    async findAll(@Request() req) {
      let response;
      if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = JSON.parse(
          Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
        );
        const user_Id = decodedToken.userPayload.id;
        response = await this.productsService.findAll(user_Id);
      }
      else {
        response = await this.productsService.findAll();
      }

      return await Promise.all(
        response.map(async (item) => {
          return {
            ...item,
            photo: await this.s3Service.getFile(item.photo) || ''
          }
        })
      )
    }
  
    @Get(':id')
    async findOne(@Param('id') id: ObjectId) {
      const response = await this.productsService.findOne(id);
      return {
        ...response,
        photo: await this.s3Service.getFile(response.photo) || '',
      };
    }
    
    @Get('createdAtd/:date')
    async findByDate(@Param('date') date: Date) {
      return this.productsService.findByDate(date);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('photo'))
    async create(@Body() createProductsDto: CreateProductsDto, @UploadedFile() photo, @Request() req) {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
      );
      console.log({decodedToken})
      const user_Id = decodedToken.userPayload.id;
      createProductsDto.merchant = user_Id

      if(photo) {
        const response = await this.s3Service.uploadFile(photo)
        if(response) {
          createProductsDto.photo = response.Key;
        }
      }
      return this.productsService.create(createProductsDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: ObjectId,
      @Body() updateProductsDto: UpdateProductsDto,
    ) {
      return this.productsService.update(id, updateProductsDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
      return this.productsService.remove(id);
    }

    

}
