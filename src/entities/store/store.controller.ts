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
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ProductsService } from '../products/products.service';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
  
  @Controller('store')
  export class StoreController {
    constructor(
      private storeService: StoreService,
      @Inject(forwardRef(() => UserService))
      private readonly userService: UserService,
      @Inject(forwardRef(() => ProductsService))
      private readonly productsService: ProductsService,

    ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
      return this.storeService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.storeService.findOne(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createStoreDto: CreateStoreDto) {
      return this.storeService.create(createStoreDto);
    }
    
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateStoreDto: UpdateStoreDto,
    ) {
      this.storeService.update(+id, updateStoreDto);
      return 'Updated';
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.storeService.remove(+id);
      return 'Deleted!';
    }
  }