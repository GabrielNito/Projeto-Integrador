import { Request } from 'express';
import { CreatePostsDTO } from '../Dtos/create/CreatePostsDTO.dto';
import { PostsRepository } from '../Repositories/Posts.repository';

export class PostsService {
  private _postsRepository = new PostsRepository();

  async findAllPosts() {
    return await this._postsRepository.findMany();
  }

  async findPostById(id: number) {
    return await this._postsRepository.findById(id);
  }

  async createPost(data: CreatePostsDTO, req: Request) {
    const user = req.user;

    return await this._postsRepository.create(data, user?.id as number);
  }
}
