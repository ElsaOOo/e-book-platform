import { BookCategory } from '@/book-category/entities/book-category.entity';
export class Book {
  id: number;
  isbn?: string;
  // 名称
  name: string;
  // 单价
  price: number;
  // 分类
  category: BookCategory;
  // 库存
  inventory: number;
  // 销量
  sales: number;
}
