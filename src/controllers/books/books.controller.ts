import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from 'src/interfaces/bookDTO.interface';
import { BooksService } from 'src/services/books/books/books.service';

@Controller('books')
export class BooksController {
    
    constructor(
        private booksService: BooksService,
    ) {}

    @Get()
    findBooks() {
        return this.booksService.find();
    }

    @Get(':id')
    findBook(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }

    @Post()
    createBook(@Body() book: BookDTO) {
        return this.booksService.create(book);
    }

    @Put(':id')
    updateBook(@Param('id') id: string, @Body() book: BookDTO) {
        return this.booksService.update(id, book);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.delete(id);
    }
}