import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Product1 from './Product-1';
import { InjectRepository } from '@nestjs/typeorm';
// nest generate resource modules/product-1
@Injectable()
export class Product1Service {
  constructor(@InjectRepository(Product1) private readonly product1Repository: Repository<Product1>) {}

  findAll() {
    return this.product1Repository.find();
  }

  findOne(id: number) {
    return this.product1Repository.findOneBy({ id });
  }

  create(productdata: Partial<Product1>) {
    // Option 1: Using create() and save()
    // const product = this.product1Repository.create({
    //   ...productdata,
    //   created: new Date()
    // });
    // return this.product1Repository.save(product);

    // Option 2: Using save() directly
    return this.product1Repository.save({
      ...productdata,
      created: new Date()
    });
  }

  async update(id: number, productData: Partial<Product1>) {
    productData.updated = new Date();
    await this.product1Repository.update(id, productData);
    return this.product1Repository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.product1Repository.delete({ id });
  }
}
