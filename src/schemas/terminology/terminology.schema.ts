import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Terminology {
    
    @Prop()
    term: string;

    @Prop()
    definition: string;
}

export const TerminologySchema = SchemaFactory.createForClass(Terminology);