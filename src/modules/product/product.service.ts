import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product';
import { Repository } from 'typeorm';

// Repository là nơi thực hiện các thao tác với DB, như là CRUD
@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  findAll() {
    return this.productRepository.find();
  }

  findOneBy(id: string) {
    return this.productRepository.findOneBy({ id });
  }
}
