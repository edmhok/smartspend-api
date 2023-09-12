import { 
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    UseGuards,
    Query,
    } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { ObjectId } from 'mongoose';
import { S3Service } from 'src/utils/S3Service';

    @Controller('order')
    export class OrderController {
        constructor(
        private orderService: OrderService,
        private readonly s3Service: S3Service,
        ) {}
        
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.orderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: ObjectId) {
        const orderRet = await this.orderService.findOne(id);
        console.log(JSON.stringify(orderRet))
        return {
            ...orderRet,
            merchant: {
                ...orderRet.merchant,
                banks : await Promise.all(orderRet.merchant.banks.map(async bank => {
                    console.log({bank})
                    return {
                        ...bank,
                        photo: bank.photo ? await this.s3Service.getFile(bank.photo) : '',
                    }
                }))
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('createdAtd/:date')
    async findByDate(@Param('date') date: Date) {
        return this.orderService.findByDate(date);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto);
    }

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    //   const token = req.headers.authorization.split(' ')[1];
    //   const decodedToken = JSON.parse(
    //     Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    //   );
    //   const merchant_id = decodedToken.userPayload.id;
    //   createOrderDto.merchant_id = merchant_id;
    //   console.log('Merchant IDxxx:', merchant_id);
    //   return this.orderService.create(createOrderDto);
    // }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(
        @Param('id') id: ObjectId,
        @Body() updateOrderDto: UpdateOrderDto,
    ) {
        return this.orderService.update(id, updateOrderDto);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
        this.orderService.remove(id);
        return 'Deleted!';
    }
    
    // add find by batch
    @Get('batch')
    async findByBatch(@Query('ids') _ids: string) {
      const ids = _ids.split(',') || []
      const response = await this.orderService.findByBatch(ids);
      console.log({response})
      return await Promise.all(
        response.map(async (item) => {
          return {
            ...item,
            // photo: await this.s3Service.getFile(item.photo) || '',  
          }
        })
      );
    }
    
}
    