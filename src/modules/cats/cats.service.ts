import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = [];

  findAll() {
    return this.cats;
  }

  createCat(cat: string) {
    this.cats.push(cat);
  }
}
