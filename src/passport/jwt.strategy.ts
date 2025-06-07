import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/modules/users/users.service';

interface JwtPayload {
  email: string;
}

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userServices: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'arrrrshibaa'
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userServices.findByEmail(payload.email);
    return user;
  }
}
