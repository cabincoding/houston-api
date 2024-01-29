import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDTO } from 'src/interfaces/authordto.interface';
import { Author } from 'src/schemas/author/author.schema';

@Injectable()
export class AuthorService {

    constructor(
        @InjectModel(Author.name) private authorModel: Model<Author>
    ) {}

    find() {
        return this.authorModel.find().exec();
    }

    create(author: AuthorDTO): Promise<Author> {
        const createdAuthor = new this.authorModel(author);
        return createdAuthor.save();
    }

    update(id: string, author: AuthorDTO): Promise<Author> {
        return this.authorModel.findByIdAndUpdate(id, author, { new: true }).exec();
    }

    delete(id: string) {
        const deletedAuthor = new this.authorModel(id);
        return deletedAuthor.deleteOne();
    }
}