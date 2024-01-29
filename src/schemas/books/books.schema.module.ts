import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Books, BooksSchema } from "./books.schema";
import { BooksController } from "src/controllers/books/books.controller";
import { BooksService } from "src/services/books/books/books.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }])],
    controllers: [BooksController],
    exports: [MongooseModule],
    providers: [BooksService]
})
export class BooksModule {}