import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Countries {
    
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const CountriesSchema = SchemaFactory.createForClass(Countries);