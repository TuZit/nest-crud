import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catServices: CatsService) {}

  @Get()
  index(@Query() query: any) {
    console.log('query', query);
  }

  // @Get()
  // findAll(): string[] {
  //   return this.catServices.findAll();
  // }

  @Post()
  createcat(@Req() request: Request) {
    console.log('shiba', request);
    // this.catServices.createCat(cat);
  }

  @Post('/create')
  create(@Body() createCatDto: any) {
    console.log('createCatDto', createCatDto);
    return 'This action adds a new cat';
  }

  //   @Get(':id')
  //   findOne(@Param() params: { id: string }): string {
  //     console.log(params.id);
  //     const result = this.catServices.findOne(params.id);
  //     return result ? `This cat: ${result}` : `This action returns a #${params.id} cat`;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
