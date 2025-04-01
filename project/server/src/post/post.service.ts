import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  // Obtener todos los posts
  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  // Crear un nuevo post
  create(post: Partial<Post>): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  // Eliminar un post por ID
  async delete(id: number): Promise<Post | null> {
    const post = await this.postRepository.findOneBy({ id });
    if (post) {
      await this.postRepository.remove(post);
    }
    return post;
  }
}