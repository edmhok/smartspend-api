import { 
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Inject,
    forwardRef,
    Request,
    UseGuards,
    } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserService } from '../user/user.service';
import { ProductsService } from '../products/products.service';
    
@Controller('order')
export class OrderController {
    constructor(
    private orderService: OrderService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,

    ) {}

    @Get()
    async findAll() {
      return this.orderService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.orderService.findOne(+id);
    }
    
    @Get('date/:date')
    async findByDate(@Param('date') date: Date) {
      return this.orderService.findByDate(date);
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
      return this.orderService.create(createOrderDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateOrderDto: UpdateOrderDto,
    ) {
      this.orderService.update(+id, updateOrderDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.orderService.remove(+id);
      return 'Deleted!';
    }

}
