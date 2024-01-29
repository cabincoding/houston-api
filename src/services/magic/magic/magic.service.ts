import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MagicDTO } from 'src/interfaces/magic.interface';
import { Magic } from 'src/schemas/magic/magic.schema';

@Injectable()
export class MagicService {
    
    constructor(
        @InjectModel(Magic.name) private magicModel: Model<Magic>
    ) {}

    find() {
        return this.magicModel.find().exec();
    }

    findOne(id: string) {
        return this.magicModel.findById(id).exec();
    }

    create(magic: MagicDTO): Promise<Magic> {
        const createdMagic = new this.magicModel(magic);
        return createdMagic.save();
    }

    update(id: string, magic: MagicDTO): Promise<Magic> {
        return this.magicModel.findByIdAndUpdate(id, magic, { new: true }).exec();
    }

    delete(id: string) {
        const deletedMagic = new this.magicModel(id);
        return deletedMagic.deleteOne();
    }
}
