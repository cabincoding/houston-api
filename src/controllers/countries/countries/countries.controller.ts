import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CountriesDTO } from 'src/interfaces/countries.interface';
import { CountriesService } from 'src/services/countries/countries/countries.service';

@Controller('countries')
export class CountriesController {

    constructor (
        private countriesService: CountriesService,
    ) {}

    @Get()
    findAllCountries() {
        return this.countriesService.find();;
    }

    @Get(':id')
    findOneCountry(@Param('id') id: string) {
        return this.countriesService.findOne(id);
    }

    @Post()
    createCountry(@Body() country: CountriesDTO) {
        return this.countriesService.create(country);
    }

    @Put(':id')
    updateCountry(@Param('id') id: string, @Body() country: CountriesDTO) {
        return this.countriesService.update(id, country);
    }

    @Delete(':id')
    deleteCountry(@Param('id') id: string) {
        return this.countriesService.delete(id);
    }
}
