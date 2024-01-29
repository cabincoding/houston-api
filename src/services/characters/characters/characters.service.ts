import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CharactersDTO } from 'src/interfaces/character.interface';
import { Characters } from 'src/schemas/characters/characters.schema';

@Injectable()
export class CharactersService {
    
    constructor(
        @InjectModel(Characters.name) private charactersModel: Model<Characters>
    ) {}

    find() {
        return this.charactersModel.find().exec();
    }

    findOne(id: string) {
        return this.charactersModel.findById(id).exec();
    }

    create(character: CharactersDTO): Promise<Characters> {
        const createdCharacter = new this.charactersModel(character);
        return createdCharacter.save();
    }

    update(id: string, character: CharactersDTO): Promise<Characters> {
        return this.charactersModel.findByIdAndUpdate(id, character, { new: true }).exec();
    }

    delete(id: string) {
        const deletedCharacter = new this.charactersModel(id);
        return deletedCharacter.deleteOne();
    }
}
