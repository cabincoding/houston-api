import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MagicDTO } from 'src/interfaces/magic.interface';
import { MagicService } from 'src/services/magic/magic/magic.service';

@Controller('magic')
export class MagicController {

    constructor (
        private magicService: MagicService,
    ) {}

    @Get()
    findAllMagic() {
        return this.magicService.find();;
    }

    @Get(':id')
    findOneMagic(@Param('id') id: string) {
        return this.magicService.findOne(id);
    }

    @Post()
    createMagic(@Body() magic: MagicDTO) {
        return this.magicService.create(magic);
    }

    @Put(':id')
    updateMagic(@Param('id') id: string, @Body() magic: MagicDTO) {
        return this.magicService.update(id, magic);
    }

    @Delete(':id')
    deleteMagic(@Param('id') id: string) {
        return this.magicService.delete(id);
    }
}
