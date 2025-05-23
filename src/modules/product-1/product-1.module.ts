import { Module } from '@nestjs/common';
import { Product1Service } from './product-1.service';
import { Product1Controller } from './product-1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product1 from './Product-1';

@Module({
  controllers: [Product1Controller],
  providers: [Product1Service],
  imports: [TypeOrmModule.forFeature([Product1])]
})
export class Product1Module {}
