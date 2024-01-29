import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorDTO } from 'src/interfaces/authordto.interface';
import { AuthorService } from 'src/services/author/author.service';

@Controller('author')
export class AuthorController {

    constructor(
        private authorService: AuthorService,
    ) {}

    @Get()
    findAuthor() {
        return this.authorService.find();
    }

    @Post()
    createAuthor(@Body() author: AuthorDTO) {
        return this.authorService.create(author);
    }

    @Put(':id')
    updateAuthor(@Param('id') id: string, @Body() author: AuthorDTO) {
        return this.authorService.update(id, author);
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id: string) {
        return this.authorService.delete(id);
    }
}
