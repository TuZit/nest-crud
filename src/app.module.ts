import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CatsModule } from './modules/cats/cats.module';
import { ProductModule } from './modules/product/product.module';
// import { Product } from './Product';
import { Product1Module } from './modules/product-1/product-1.module';
import Product1 from './modules/product-1/Product-1';

@Module({
  imports: [
    UserModule,
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [Product1],
      synchronize: true
      // migrationsRun: false
    }),
    ProductModule,
    Product1Module
  ],
  controllers: [AppController],
  providers: [AppService]
})
// @Module({
//   imports: [
//     UserModule,
//     CatsModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'postgres-master.int.selless.dev',
//       port: 5432,
//       username: 'scm',
//       password: '123456',
//       database: 'scm',
//       // entities: [join(__dirname, '**', '*.ts')],
//       // entities: [__dirname + '/../entities/*.ts'],
//       entities: [Product],
//       synchronize: false,
//       migrationsRun: false
//     }),
//     ProductModule
//   ],
//   controllers: [AppController],
//   providers: [AppService]
// })
export class AppModule {}
