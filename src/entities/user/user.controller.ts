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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { ProductsService } from '../products/products.service';
import { OrderService } from '../order/order.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { StoreService } from '../store/store.service';


@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    @Inject(forwardRef(() => AffiliateService))
    private readonly affiliateService: AffiliateService,
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,
    @Inject(forwardRef(() => OrderService))
    private readonly orderService: OrderService,
    @Inject(forwardRef(() => StoreService))
    private readonly storeService: StoreService,
  ) {}
  
  @UseGuards(JwtAuthGuard)
    @Get()
    async fillAll() {
      return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    );
    const user_id = decodedToken.userPayload.id;

    return this.userService.findOne(+user_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}