import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountriesDTO } from 'src/interfaces/countries.interface';
import { Countries } from 'src/schemas/countries/countries.schema';

@Injectable()
export class CountriesService {

    constructor(
        @InjectModel(Countries.name) private countriesModel: Model<Countries>
    ) {}

    find() {
        return this.countriesModel.find().exec();
    }

    findOne(id: string) {
        return this.countriesModel.findById(id).exec();
    }

    create(country: CountriesDTO): Promise<Countries> {
        const createdCountry = new this.countriesModel(country);
        return createdCountry.save();
    }

    update(id: string, country: CountriesDTO): Promise<Countries> {
        return this.countriesModel.findByIdAndUpdate(id, country, { new: true }).exec();
    }

    delete(id: string) {
        const deletedCountry = new this.countriesModel(id);
        return deletedCountry.deleteOne();
    }
}
