import { PostsRepository } from '../Repositories/Posts.repository';

export class PostsService {
  private _postsRepository = new PostsRepository();

  async findAllPosts() {
    return await this._postsRepository.findMany();
  }

  async findPostById(id: number) {
    return await this._postsRepository.findById(id);
  }
}
