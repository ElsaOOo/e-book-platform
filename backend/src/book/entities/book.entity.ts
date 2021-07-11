import { BookCategory } from '@/book-category/entities/book-category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { nullable: true })
  isbn?: string;

  // 名称
  @Column()
  name: string;

  // 作者
  @Column()
  author: string;

  // 单价
  @Column()
  price: number;

  // 分类
  @OneToOne(() => BookCategory)
  @JoinColumn()
  category: BookCategory;

  // 库存
  @Column('int', { nullable: true })
  inventory: number;

  // 销量
  @Column('int', { nullable: true })
  sales: number;
}
