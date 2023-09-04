import { 
Controller,
Post,
Get,
Param,
Body,
Delete,
Patch,
Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { OrderService } from '../order/order.service';
import { ObjectId } from 'mongoose';
// import { S3Service } from 'src/utils/S3Service';

@Controller('products')
export class ProductsController {
    constructor(
    private productsService: ProductsService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
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
            // photo: await this.s3Service.getFile(item.photo) || '',  
          }
        })
      );
    }

    @Get()
    async findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: ObjectId) {
      return this.productsService.findOne(id);
    }
    
    @Get('createdAtd/:date')
    async findByDate(@Param('date') date: Date) {
      return this.productsService.findByDate(date);
    }

    @Post()
    create(@Body() createProductsDto: CreateProductsDto) {
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
