import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Characters, CharactersSchema } from "./characters.schema";
import { CharactersController } from "src/controllers/characters/characters.controller";
import { CharactersService } from "src/services/characters/characters/characters.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Characters.name, schema: CharactersSchema }])],
    controllers: [CharactersController],
    exports: [MongooseModule],
    providers: [CharactersService]
  })
export class CharactersModule {}
