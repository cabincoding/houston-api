import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogDTO } from 'src/interfaces/blog.interface';
import { BlogService } from 'src/services/blog/blog/blog.service';

@Controller('blog')
export class BlogController {
        
    constructor(
        private blogService: BlogService,
    ) {}

    @Get()
    findBooks() {
        return this.blogService.find();
    }

    @Get(':id')
    findBook(@Param('id') id: string) {
        return this.blogService.findOne(id);
    }

    @Post()
    createBook(@Body() blog: BlogDTO) {
        return this.blogService.create(blog);
    }

    @Put(':id')
    updateBook(@Param('id') id: string, @Body() blog: BlogDTO) {
        return this.blogService.update(id, blog);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.blogService.delete(id);
    }
}
