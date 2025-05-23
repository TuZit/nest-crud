import { Test, TestingModule } from '@nestjs/testing';
import { Product1Controller } from './product-1.controller';
import { Product1Service } from './product-1.service';

describe('Product1Controller', () => {
  let controller: Product1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Product1Controller],
      providers: [Product1Service],
    }).compile();

    controller = module.get<Product1Controller>(Product1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
