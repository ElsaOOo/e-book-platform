import { ApiProperty } from '@nestjs/swagger';

export class CreateBookCategoryDto {
  @ApiProperty({
    description: '分类名称',
  })
  categoryName: string;
}
