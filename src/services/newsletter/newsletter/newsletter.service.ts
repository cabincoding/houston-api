import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsletterDTO } from 'src/interfaces/newsletter.interface';
import { Newsletter } from 'src/schemas/newsletter/newsletter.schema';

@Injectable()
export class NewsletterService {
    
    constructor(
        @InjectModel(Newsletter.name) private newsletterModel: Model<Newsletter>
    ) {}

    find() {
        return this.newsletterModel.find().exec();
    }

    findOne(id: string) {
        return this.newsletterModel.findById(id).exec();
    }

    create(newsletter: NewsletterDTO): Promise<Newsletter> {
        const createdNewsletter = new this.newsletterModel(newsletter);
        return createdNewsletter.save();
    }

    update(id: string, newsletter: NewsletterDTO): Promise<Newsletter> {
        return this.newsletterModel.findByIdAndUpdate(id, newsletter, { new: true }).exec();
    }

    delete(id: string) {
        const deletedNewsletter = new this.newsletterModel(id);
        return deletedNewsletter.deleteOne();
    }
}
