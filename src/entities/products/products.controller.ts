import { 
Controller,
Post,
Get,
Param,
Body,
Delete,
Patch,
forwardRef,
Inject,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { OrderService } from '../order/order.service';
import { ObjectId } from 'mongoose';

@Controller('products')
export class ProductsController {
    constructor(
    private productsService: ProductsService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
    ) {}

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
