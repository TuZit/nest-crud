import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const refreshToken = this.jwtServices.sign(payload, {
      expiresIn: '7d'
    });
    await this.userServices.saveRefreshToken(refreshToken, user.id);
    return {
      access_token: this.jwtServices.sign(payload),
      refresh_token: refreshToken
    };
  }

  async verifyRefreshToken(refreshToken: string) {
    const decoded = this.jwtServices.decode(refreshToken);
    if (decoded) {
      const user = await this.userServices.verifyRefreshToken(refreshToken, decoded.sub);
      if (user) {
        return user;
      }
    }
    console.log('decoded', decoded);

    throw new UnauthorizedException('Invalid refresh token');
  }
}
