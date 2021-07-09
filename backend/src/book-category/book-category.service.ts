import { InternalServerErrorException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '@/result/result';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';

import { BookCategory } from './entities/book-category.entity';
@Injectable()
export class BookCategoryService {
  constructor(
    @InjectRepository(BookCategory)
    private bookCategoryRepository: Repository<BookCategory>,
  ) {}
  async create(
    createBookCategoryDto: CreateBookCategoryDto,
  ): Promise<Result<BookCategory>> {
    try {
      const category = await this.bookCategoryRepository.save(
        createBookCategoryDto,
      );
      return Result.succeed(undefined, category);
    } catch (error) {}
    throw new InternalServerErrorException('server error');
  }

  async findAll() {
    try {
      const categories = await this.bookCategoryRepository.find();
      return Result.succeed(undefined, categories);
    } catch (error) {
      throw new InternalServerErrorException('server error');
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.bookCategoryRepository.findOne(id);
      return Result.succeed(undefined, category || null);
    } catch (error) {
      throw new InternalServerErrorException('server error');
    }
  }

  async remove(id: number) {
    try {
      await this.bookCategoryRepository.delete(id);
      return Result.succeed();
    } catch (error) {
      throw new InternalServerErrorException('server error');
    }
  }
}
