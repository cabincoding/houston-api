import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Countries, CountriesSchema } from "./countries.schema";
import { CountriesController } from "src/controllers/countries/countries/countries.controller";
import { CountriesService } from "src/services/countries/countries/countries.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Countries.name, schema: CountriesSchema }])],
    controllers: [CountriesController],
    exports: [MongooseModule],
    providers: [CountriesService]
  })
export class CountriesModule {}