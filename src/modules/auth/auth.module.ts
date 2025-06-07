import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/users.entities';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'src/passport/local.strategy';
import { JWTStrategy } from 'src/passport/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JWTStrategy],
  imports: [
    TypeOrmModule.forFeature([Users]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'arrrrshibaa',
      signOptions: {
        expiresIn: '1h'
      }
    })
  ]
})
export class AuthModule {}
