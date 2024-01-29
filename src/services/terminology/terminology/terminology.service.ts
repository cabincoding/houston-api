import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TerminologyDTO } from 'src/interfaces/terminology.interface';
import { Terminology } from 'src/schemas/terminology/terminology.schema';

@Injectable()
export class TerminologyService {
    
    constructor(
        @InjectModel(Terminology.name) private terminologyModel: Model<Terminology>
    ) {}

    find() {
        return this.terminologyModel.find().exec();
    }

    findOne(id: string) {
        return this.terminologyModel.findById(id).exec();
    }

    create(term: TerminologyDTO): Promise<TerminologyDTO> {
        const createdTerminology = new this.terminologyModel(term);
        return createdTerminology.save();
    }

    update(id: string, term: TerminologyDTO): Promise<Terminology> {
        return this.terminologyModel.findByIdAndUpdate(id, term, { new: true }).exec();
    }

    delete(id: string) {
        const deletedTerminology = new this.terminologyModel(id);
        return deletedTerminology.deleteOne();
    }
}
