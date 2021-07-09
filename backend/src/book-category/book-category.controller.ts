import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookCategoryService } from './book-category.service';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';

@ApiTags('book-category')
@Controller('book-category')
export class BookCategoryController {
  constructor(private readonly bookCategoryService: BookCategoryService) {}

  @ApiOperation({ description: '创建一个分类' })
  @Post()
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookCategoryService.create(createBookCategoryDto);
  }

  @ApiOperation({ description: '查询所有分类' })
  @Get()
  findAll() {
    return this.bookCategoryService.findAll();
  }

  @ApiOperation({ description: '根据分类id查询分类' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCategoryService.findOne(+id);
  }

  @ApiOperation({ description: '删除分类' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCategoryService.remove(+id);
  }
}
