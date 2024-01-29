import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NewsletterDTO } from 'src/interfaces/newsletter.interface';
import { NewsletterService } from 'src/services/newsletter/newsletter/newsletter.service';

@Controller('newsletter')
export class NewsletterController {

    constructor(
        private newsletterService: NewsletterService,
    ) {}

    @Get()
    findNewsletters() {
        return this.newsletterService.find();
    }

    @Get(':id')
    findNewsletter() {
        return this.newsletterService.find();
    }

    @Post()
    createNewsletter(@Body() newsletter: NewsletterDTO) {
        return this.newsletterService.create(newsletter);
    }

    @Put(':id')
    updateNewsletter(@Param('id') id: string, @Body() newsletter: NewsletterDTO) {
        return this.newsletterService.update(id, newsletter);
    }

    @Delete(':id')
    deleteNewsletter(@Param('id') id: string) {
        return this.newsletterService.delete(id);
    }
}
