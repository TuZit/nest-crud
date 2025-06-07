import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userServices: UsersService,
    private readonly jwtServices: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    return this.userServices.validateUsser(email, password);
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtServices.sign(payload)
    };
  }
}
