import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Author, AuthorSchema } from "./author.schema";
import { AuthorController } from "src/controllers/author/author.controller";
import { AuthorService } from "src/services/author/author.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])],
    controllers: [AuthorController],
    exports: [MongooseModule],
    providers: [AuthorService]
  })
export class AuthorModule {}