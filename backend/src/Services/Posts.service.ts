import { Request } from "express";
import { CreatePostsDTO } from "../Dtos/create/CreatePostsDTO.dto";
import { PostsRepository } from "../Repositories/Posts.repository";
import { UpdatePostsDTO } from "../Dtos/update/UpdatePostsDTO.dto";
import { ThreadsRepository } from "../Repositories/Threads.repository";

export class PostsService {
  private _postsRepository = new PostsRepository();
  private _threadRepository = new ThreadsRepository();

  async findAllPosts() {
    return await this._postsRepository.findMany();
  }

  async findPostById(id: number) {
    return await this._postsRepository.findById(id);
  }

  async createPost(data: CreatePostsDTO, req: Request) {
    const user = req.user;

    // const thread = await this._threadRepository.findById(data.threadId);

    // if (thread?.userId !== user?.id) {
    //   throw Error("Operation not allowed");
    // }

    return await this._postsRepository.create(data, user?.id as number);
  }

  async updatePosts(data: UpdatePostsDTO, req: Request) {
    const { id } = data;
    // const post = await this._postsRepository.findById(id);
    // const user = req.user;

    // if (user?.id !== post?.userId) {
    //   throw Error('Operation not allowrd');
    // }

    return await this._postsRepository.update(data);
  }

  async deletePost(id: number, req: Request) {
    const user = req.user;
    const post = await this._postsRepository.findById(id);

    if (user?.role !== "Admin" && user?.id !== post?.userId) {
      throw Error("Operation not allowed");
    }

    return await this._postsRepository.delete(id);
  }
}
