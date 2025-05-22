import { Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catServices: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catServices.findAll();
  }

  @Post()
  createcat(cat: string) {
    this.catServices.createCat(cat);
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
