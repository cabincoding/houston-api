import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDTO } from 'src/interfaces/bookDTO.interface';
import { Books } from 'src/schemas/books/books.schema';

@Injectable()
export class BooksService {

    constructor(
        @InjectModel(Books.name) private booksModel: Model<Books>
    ) {}

    find() {
        return this.booksModel.find().exec();
    }

    findOne(id: string) {
        return this.booksModel.findById(id).exec();
    }

    create(book: BookDTO): Promise<Books> {
        const createdBook = new this.booksModel(book);
        return createdBook.save();
    }

    update(id: string, book: BookDTO): Promise<Books> {
        return this.booksModel.findByIdAndUpdate(id, book, { new: true }).exec();
    }

    delete(id: string) {
        const deletedBook = new this.booksModel(id);
        return deletedBook.deleteOne();
    }
}
