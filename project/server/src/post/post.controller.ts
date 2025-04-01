import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('findAll')
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Post('create')
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(createPostDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number): Promise<PostEntity | null> {
    return this.postService.delete(id);
  }
}