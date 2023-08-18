import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
  Request,
  UseGuards,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { OrderService } from '../order/order.service';


@Controller('merchants')
export class MerchantController {
  constructor(
    private merchantService: MerchantService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async fillAll() {
    return this.merchantService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    );
    const merchant_id = decodedToken.merchantPayload.id;

    return this.merchantService.findOne(+merchant_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.merchantService.findOne(+id);
  }

  @Post()
  create(@Body() createMerchantDto: CreateMerchantDto) {
    console.log('tests')
    return this.merchantService.create(createMerchantDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchantDto: UpdateMerchantDto) {
    return this.merchantService.update(+id, updateMerchantDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.merchantService.remove(+id);
    return { status: 'success' };
  }
}