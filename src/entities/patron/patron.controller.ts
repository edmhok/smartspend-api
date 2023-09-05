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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PatronService } from './patron.service';
import { CreatePatronDto } from './dto/create-patron.dto';
import { UpdatePatronDto } from './dto/update-patron.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/utils/S3Service';


@Controller('patrons')
export class PatronController {
  constructor(
    private patronService: PatronService,
    private readonly s3Service: S3Service,
  ) {}
  
    @UseGuards(JwtAuthGuard)
    @Get()
    async fillAll() {
      const response = await this.patronService.findAll();
      return await Promise.all(
        response.map(async (item) => {
          return {
            ...item,
            photo: await this.s3Service.getFile(item.photos[0]) || ''
          }
        })
      )
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    );
    const patron_id = decodedToken.patronPayload.id;

    const response = await this.patronService.findOne(patron_id);
    return {
      ...response,
      photo: await this.s3Service.getFile(response.photos[0]) || '',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    const response = await this.patronService.findOne(id);
    return {
      ...response,
      photo: await this.s3Service.getFile(response.photos[0]) || '',
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('photos'))
  async create(@Body() createPatronDto: CreatePatronDto, @UploadedFile() photo) {
    if(photo) {
      const response = await this.s3Service.uploadFile(photo)
      if(response) {
        createPatronDto.photos = response.Key;
      }
    }
    return this.patronService.create(createPatronDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updatePatronDto: UpdatePatronDto) {
    return this.patronService.update(id, updatePatronDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return this.patronService.remove(id);
  }
}