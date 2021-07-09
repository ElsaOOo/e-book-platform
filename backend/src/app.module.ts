import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { BookCategoryModule } from './book-category/book-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'e-book-platform',
      synchronize: true,
      autoLoadEntities: true,
    }),
    BookModule,
    BookCategoryModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
