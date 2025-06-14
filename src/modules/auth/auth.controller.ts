import { UsersService } from './../users/users.service';
import { BadRequestException, Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/entity/users.entities';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { JWTAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('/register')
  register(@Body() userData: Partial<Users>) {
    return this.usersService.createUser(userData);
  }

  @UseGuards(LocalAuthGuard)
  // vào LocalAuthGuard để validate trc
  // giống như 1 middeware, trả về thông tin user trong request -> request.user
  @Post('/login')
  login(@Request() req: { user: Users }) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard)
  @Get('/profile')
  profile(@Request() req: any) {
    return req.user;
  }

  @Post('refresh-token')
  async refreshToken(@Body() { refreshToken }: { refreshToken: string }) {
    if (!refreshToken) {
      throw new BadRequestException('Refresh Token is required');
    }
    const user = await this.authService.verifyRefreshToken(refreshToken);
    if (!user) {
      throw new BadRequestException('Invalid refresh token');
    }
    return this.authService.login(user);
  }
}
