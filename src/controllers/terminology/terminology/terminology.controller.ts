import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TerminologyDTO } from 'src/interfaces/terminology.interface';
import { TerminologyService } from 'src/services/terminology/terminology/terminology.service';

@Controller('terminology')
export class TerminologyController {

    constructor (
        private terminologyService: TerminologyService,
    ) {}

    @Get()
    findAllCharacters() {
        return this.terminologyService.find();;
    }

    @Get(':id')
    findOneCharacter(@Param('id') id: string) {
        return this.terminologyService.findOne(id);
    }

    @Post()
    createCharacter(@Body() terminology: TerminologyDTO) {
        return this.terminologyService.create(terminology);
    }

    @Put(':id')
    updateCharacter(@Param('id') id: string, @Body() terminology: TerminologyDTO) {
        return this.terminologyService.update(id, terminology);
    }

    @Delete(':id')
    deleteCharacter(@Param('id') id: string) {
        return this.terminologyService.delete(id);
    }
}
