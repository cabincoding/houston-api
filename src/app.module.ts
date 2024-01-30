import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './schemas/author/author.schema.module';
import { QuoteModule } from './schemas/quote/quote.schema.module';
import { BooksModule } from './schemas/books/books.schema.module';
import { NewsletterModule } from './schemas/newsletter/newsletter.schema.module';
import { CharactersModule } from './schemas/characters/characters.schema.module';
import { CountriesModule } from './schemas/countries/countries.schema.module';
import { TerminologyModule } from './schemas/terminology/terminology.schema.module';
import { MagicModule } from './schemas/magic/magic.schema.module';
import { BlogModule } from './schemas/blog/blog.schema.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/houston'),
    AuthorModule,
    QuoteModule,
    BooksModule,
    NewsletterModule,
    CharactersModule,
    CountriesModule,
    TerminologyModule,
    MagicModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
