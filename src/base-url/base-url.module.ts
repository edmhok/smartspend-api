import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseUrl } from './base-url.entity';
import { BaseUrlService } from './base-url.service';
import { BaseUrlController } from './base-url.controller';
import { BaseUrlRepository } from './base-url.repository';



@Module({
    imports: [
      TypeOrmModule.forFeature([BaseUrl, BaseUrlRepository]) 
    ],
    providers: [BaseUrlService],
    controllers: [BaseUrlController]
  })
  export class BaseUrlModule {}