import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseUrl } from './base-url.entity';

@Injectable()
export class BaseUrlService {
    constructor(@InjectRepository(BaseUrl) private baseUrlRepo: Repository<BaseUrl>) {}

    async saveBaseUrl(baseUrl: string) {
      const newBaseUrl = new BaseUrl()
      newBaseUrl.url = baseUrl
      await this.baseUrlRepo.save(newBaseUrl)
    }
}
