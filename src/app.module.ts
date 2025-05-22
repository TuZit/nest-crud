import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [UserModule, CatsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
