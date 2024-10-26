import { CreatePostsDTO } from '../Dtos/create/CreatePostsDTO.dto';
import Posts from '../Entities/posts.entity';

export class PostsRepository {
  async findMany() {
    return await Posts.findMany({ include: { thread: true, user: true } });
  }

  async findById(id: number) {
    return await Posts.findUnique({
      where: { id },
      include: { thread: true, user: true },
    });
  }

  async create(data: CreatePostsDTO, userId: number) {
    const { content, threadId } = data;
    return await Posts.create({
      data: {
        content,
        threadId,
        userId,
      },
    });
  }
}
