import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Author, AuthorSchema } from "../author/author.schema";
import { BookDetails, BookDetailsSchema } from "../book-details/book-details.schema";
import { Affiliates, AffiliatesSchema } from "../affiliates/affiliates.schema";
import { Document } from "mongoose";

@Schema()
export class Books extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    subtitle: string;

    @Prop({ type: AuthorSchema })
    author: Author;

    @Prop()
    releaseDate: Date;

    @Prop({ type: BookDetailsSchema })
    details: BookDetails;

    @Prop([{ type: AffiliatesSchema }])
    affiliateLinks: Affiliates[];

    @Prop()
    photoUrl: string;

    @Prop({ default: false })
    progressFeature: boolean;
}

export const BooksSchema = SchemaFactory.createForClass(Books);