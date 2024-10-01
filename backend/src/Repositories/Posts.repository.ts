import Posts from '../Entitites/posts.entity';

export class PostsRepository {
  async findMany() {
    return await Posts.findMany({ include: { thread: true, user: true } });
  }
}
