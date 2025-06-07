import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userServices: UsersService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(email: string, password: string) {
    const user = await this.userServices.validateUsser(email ?? '', password ?? '');
    if (!user) {
      throw new UnauthorizedException('Invalid Credential');
    }
    return user;
  }
}
