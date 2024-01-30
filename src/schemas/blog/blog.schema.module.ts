import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogController } from "src/controllers/blog/blog.controller";
import { Blog, BlogSchema } from "./blog.schema";
import { BlogService } from "src/services/blog/blog/blog.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }])],
    controllers: [BlogController],
    exports: [MongooseModule],
    providers: [BlogService]
})
export class BlogModule {}