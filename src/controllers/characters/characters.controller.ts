import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharactersDTO } from 'src/interfaces/character.interface';
import { CharactersService } from 'src/services/characters/characters/characters.service';

@Controller('characters')
export class CharactersController {

    constructor (
        private characterService: CharactersService,
    ) {}

    @Get()
    findAllCharacters() {
        return this.characterService.find();;
    }

    @Get(':id')
    findOneCharacter(@Param('id') id: string) {
        return this.characterService.findOne(id);
    }

    @Post()
    createCharacter(@Body() character: CharactersDTO) {
        return this.characterService.create(character);
    }

    @Put(':id')
    updateCharacter(@Param('id') id: string, @Body() character: CharactersDTO) {
        return this.characterService.update(id, character);
    }

    @Delete(':id')
    deleteCharacter(@Param('id') id: string) {
        return this.characterService.delete(id);
    }
}
