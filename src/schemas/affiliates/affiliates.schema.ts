import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Affiliates {

    @Prop()
    name: string;

    @Prop()
    link: string;
}

export const AffiliatesSchema = SchemaFactory.createForClass(Affiliates);