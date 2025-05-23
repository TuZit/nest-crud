import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductService) {}

  @Get()
  index() {
    return this.productServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productServices.findOneBy(id);
  }
}
