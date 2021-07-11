import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'id',
  })
  id: number;

  @ApiProperty({
    description: 'isbn',
    required: false,
  })
  isbn: string;

  @ApiProperty({
    description: '书籍名称',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '书籍作者',
  })
  @IsString()
  author: string;

  @ApiProperty({
    description: '书籍单价',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: '分类',
  })
  @IsNumber()
  categoryId: number;

  @ApiProperty({
    description: '库存',
    required: false,
  })
  inventory: number;

  @ApiProperty({
    description: '销量',
    required: false,
  })
  sales: number;
}
