import {
    Controller,
    Request,
    Post,
    UseGuards,
    Get,
    Body,
  } from '@nestjs/common';
  import { LocalAuthGuard } from './guard/local-auth.guard';
  import { AuthService } from './auth.service';
  import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
import { MerchantAuthGuard } from './guard/merchant-auth.guard';
import { PatronAuthGuard } from './guard/patron-auth.guard';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      console.log('in login')
      return this.authService.login(req, 'admin');
    }

    @UseGuards(MerchantAuthGuard)
    @Post('merchant/login')
    async merchantLogin(@Request() req) {
      console.log('in login')
      return this.authService.login(req, 'merchant');
    }

    @UseGuards(PatronAuthGuard)
    @Post('patron/login')
    async patronLogin(@Request() req) {
      console.log('in login')
      return this.authService.login(req, 'patron');
    }
  
    @Post('register')
    create(@Body() createUsersDto: CreateUserDto) {
      return this.authService.create(createUsersDto);
    }

  }
  