import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { PatronService } from 'src/entities/patron/patron.service';

@Injectable()
export class PatronStrategy extends PassportStrategy(Strategy, 'patron') {
  constructor(private patronService: PatronService) {
    super({
      emailField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.patronService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
