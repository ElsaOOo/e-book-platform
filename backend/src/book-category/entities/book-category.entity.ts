import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;
}
