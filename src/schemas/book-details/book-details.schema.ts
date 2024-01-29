import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class BookDetails {
    @Prop()
    parentBookId: string;

    @Prop()
    series: string;

    @Prop()
    serialNumber: number;

    @Prop()
    written: number;

    @Prop()
    rawEdit: number;

    @Prop()
    finalEdit: number;
}

export const BookDetailsSchema = SchemaFactory.createForClass(BookDetails);