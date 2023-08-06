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
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { UserService } from '../user/user.service';
import { StoreService } from '../store/store.service';

@Controller('products')
export class ProductsController {
    constructor(
    private productsService: ProductsService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => StoreService))
    private readonly storeService: StoreService,

    ) {}

    @Get()
    async findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.productsService.findOne(+id);
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
      @Param('id') id: number,
      @Body() updateProductsDto: UpdateProductsDto,
    ) {
      this.productsService.update(+id, updateProductsDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.productsService.remove(+id);
      return 'Deleted!';
    }

}
