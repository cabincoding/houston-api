import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Newsletter {
    @Prop()
    title: string;

    @Prop()
    date: Date;

    @Prop()
    body: string;

    @Prop()
    photoUrl: string;
}

export const NewsletterSchema = SchemaFactory.createForClass(Newsletter);