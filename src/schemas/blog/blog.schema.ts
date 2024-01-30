import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Blog extends Document {
    @Prop()
    title: string;

    @Prop()
    date: Date;

    @Prop()
    body: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);