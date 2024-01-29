import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MagicController } from "src/controllers/magic/magic/magic.controller";
import { MagicService } from "src/services/magic/magic/magic.service";
import { Magic, MagicSchema } from "./magic.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Magic.name, schema: MagicSchema }])],
    controllers: [MagicController],
    exports: [MongooseModule],
    providers: [MagicService]
  })
export class MagicModule {}