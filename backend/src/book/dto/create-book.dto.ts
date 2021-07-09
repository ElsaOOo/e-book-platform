import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'id',
  })
  id: number;

  @ApiProperty({
    description: '书籍名称',
  })
  name: string;
}
