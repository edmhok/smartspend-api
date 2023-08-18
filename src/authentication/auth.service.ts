import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from '../entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log({username, password})
    const user = await this.userService.userCredential({ username: username });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(user: any, role: string) {
    console.log('in authservice', user.user)
    const payload = {
      userPayload: {
      username: user.user.username,
      password: user.user.password,
      first_name: user.user.first_name,
      middle_name: user.user.middle_name,
      last_name : user.user.last_name,
      birthdate :  user.user.birthdate,
      phone : user.user.phone,
      address: user.user.address,
      city: user.user.city,
      state: user.user.state,
      country: user.user.country,
      zipcode: user.user.zipcode,
      points: user.user.points,
      },
    };
    return {
      access_token: this.jwtService.sign(payload),
      role: role,

    };
  }

  async create(data) {
    data.password = await bcrypt.hash(data.password, 10);
    const response = await this.userService.create(data);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
