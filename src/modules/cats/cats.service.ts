import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = [];

  findAll() {
    return this.cats;
  }

  createCat(cat: string) {
    console.log('shiba', cat);
    this.cats.push(cat);
  }

  findOne(cat: string) {
    return this.cats.find((item) => item === cat);
  }
}
