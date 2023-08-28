import { 
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    UseGuards,
    } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { ObjectId } from 'mongoose';

    
    @Controller('order')
    export class OrderController {
        constructor(
        private orderService: OrderService,

        ) {}
        
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.orderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: ObjectId) {
        return this.orderService.findOne(id);
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
        this.orderService.update(id, updateOrderDto);
        return 'Updated';
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
        this.orderService.remove(id);
        return 'Deleted!';
    }
    
}
    