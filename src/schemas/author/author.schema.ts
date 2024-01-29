import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Quote } from "src/interfaces/quote.interface";
import { Socials } from "src/interfaces/socials.interface";
import { Document } from "mongoose";
import { QuoteSchema } from "../quote/quote.schema";

@Schema()
export class Author extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    bio: string;

    @Prop()
    email: string;

    @Prop()
    socials: Socials[];

    @Prop({ type: QuoteSchema })
    quote: Quote;

    @Prop()
    photoUrl: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);