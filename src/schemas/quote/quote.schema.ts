import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Quote extends Document {
    @Prop({ required: true })
    quote: string;

    @Prop()
    citation: string;

    @Prop()
    photoUrl: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);