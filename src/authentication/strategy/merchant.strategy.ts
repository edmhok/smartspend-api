import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { MerchantService } from 'src/entities/merchant/merchant.service';

@Injectable()
export class MerchantStrategy extends PassportStrategy(Strategy, 'merchant') {
  constructor(private merchantService: MerchantService) {
    super({
      emailField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.merchantService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
