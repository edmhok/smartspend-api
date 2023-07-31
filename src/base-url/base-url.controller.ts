import { Controller, Get } from '@nestjs/common';
import { BaseUrlService } from './base-url.service';

@Controller('base-url')
export class BaseUrlController {
  constructor(private baseUrlService: BaseUrlService) {}

  @Get()
  async getBaseUrl() {
    const { baseUrl } = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getBaseUrl`)
      .then(res => res.json())

    return this.baseUrlService.saveBaseUrl(baseUrl)
  }

  

}