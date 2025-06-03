import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import Product1 from './Product-1';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product1Service } from './product-1.service';

@Controller('product-1')
// @UsePipes(
//   new ValidationPipe({
//     transform: true,
//     exceptionFactory: (validatorError: ValidationError[] = []) => {
//       return new BadGatewayException(
//         validatorError.map((err) => ({
//           [err.property]: err.constraints ? Object.values(err.constraints) : []
//         }))
//       );
//     }
//   })
// )
export class Product1Controller {
  constructor(private readonly product1Service: Product1Service) {}

  @Get()
  findAll() {
    return this.product1Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const product = await this.product1Service.findOne(id);

    if (!product) {
      throw new HttpException('Not found product', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  @Post()
  create(@Body() productData: CreateProductDTO) {
    return this.product1Service.create(productData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() productdata: Partial<Product1>) {
    return this.product1Service.update(id, productdata);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const product = await this.product1Service.findOne(id);

    if (!product) {
      throw new HttpException('Not found product', HttpStatus.NOT_FOUND);
    }

    return this.product1Service.remove(id);
  }
}
