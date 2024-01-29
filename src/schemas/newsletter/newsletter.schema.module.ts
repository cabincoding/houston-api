import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Newsletter, NewsletterSchema } from "./newsletter.schema";
import { NewsletterController } from "src/controllers/newsletter/newsletter.controller";
import { NewsletterService } from "src/services/newsletter/newsletter/newsletter.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Newsletter.name, schema: NewsletterSchema }])],
    controllers: [NewsletterController],
    exports: [MongooseModule],
    providers: [NewsletterService]
  })
export class NewsletterModule {}