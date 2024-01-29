import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Magic {

    @Prop()
    ruleDescription: string;
}

export const MagicSchema = SchemaFactory.createForClass(Magic);