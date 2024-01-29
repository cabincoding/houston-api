import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Quote, QuoteSchema } from "./quote.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }])],
    controllers: [],
    exports: [MongooseModule],
    providers: []
  })
export class QuoteModule {}