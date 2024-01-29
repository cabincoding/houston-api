import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TerminologyController } from "src/controllers/terminology/terminology/terminology.controller";
import { TerminologyService } from "src/services/terminology/terminology/terminology.service";
import { Terminology, TerminologySchema } from "./terminology.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Terminology.name, schema: TerminologySchema }])],
    controllers: [TerminologyController],
    exports: [MongooseModule],
    providers: [TerminologyService]
  })
export class TerminologyModule {}