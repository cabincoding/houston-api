import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Characters {
    @Prop()
    name: string;

    @Prop()
    bio: string;
}

export const CharactersSchema = SchemaFactory.createForClass(Characters);