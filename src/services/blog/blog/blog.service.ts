import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDTO } from 'src/interfaces/blog.interface';
import { Blog } from 'src/schemas/blog/blog.schema';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel(Blog.name) private blogModel: Model<Blog>
    ) {}

    find() {
        return this.blogModel.find().exec();
    }

    findOne(id: string) {
        return this.blogModel.findById(id).exec();
    }

    create(blog: BlogDTO): Promise<Blog> {
        const createdBlog = new this.blogModel(blog);
        return createdBlog.save();
    }

    update(id: string, blog: BlogDTO): Promise<Blog> {
        return this.blogModel.findByIdAndUpdate(id, blog, { new: true }).exec();
    }

    delete(id: string) {
        const deletedBlog = new this.blogModel(id);
        return deletedBlog.deleteOne();
    }
}
