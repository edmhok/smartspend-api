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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MerchantBanksService } from './merchantBanks.service';
import { CreateMerchantBanksDto } from './dto/create-merchantBanks.dto';
import { UpdateMerchantBanksDto } from './dto/update-merchantBanks.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { OrderService } from '../order/order.service';
import { ObjectId } from 'mongoose';
import { S3Service } from 'src/utils/S3Service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('merchantBanks')
export class MerchantBanksController {
  constructor(
    private merchantBanksService: MerchantBanksService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
    private readonly s3Service: S3Service,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    console.log({id})
    const response = await this.merchantBanksService.findOne(id);
    return {
      ...response,
      photo: response.photo ? await this.s3Service.getFile(response.photo[0]) : '',
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  async create(@Body() createMerchantBanksDto: CreateMerchantBanksDto, @UploadedFile() photo) {
    console.log({createMerchantBanksDto})
    if(photo) {
      const response = await this.s3Service.uploadFile(photo)
      if(response) {
        createMerchantBanksDto.photo = response.Key;
      }
    }
    return this.merchantBanksService.create(createMerchantBanksDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('photos'))
  update(@Param('id') id: ObjectId, @Body() updateMerchantBanksDto: UpdateMerchantBanksDto, @UploadedFile() bankPhotos) {
    return this.merchantBanksService.update(id, updateMerchantBanksDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return this.merchantBanksService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('clear/:mid')
  async clear(@Param('mid') mid: ObjectId) {
    return this.merchantBanksService.clear(mid);
  }
}