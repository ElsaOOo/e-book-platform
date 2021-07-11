import { Result } from '@/result/result';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    try {
      const book = await this.bookRepository.save(createBookDto);
      return Result.succeed(undefined, book);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all book`;
  }

  async findOne(id: number) {
    try {
      const book = this.bookRepository.findOne(id);
      return Result.succeed(undefined, book);
    } catch (error) {
      throw new InternalServerErrorException('server error');
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
