import { PostsService } from '../Services/Posts.service';
import { Response, Request, NextFunction } from 'express';

export class PostsController {
  private _postService: PostsService;

  constructor() {
    this._postService = new PostsService();
  }

  getAllPosts = async (_req: Request, res: Response, next: NextFunction) => {
    const data = await this._postService.findAllPosts();
    try {
      res.status(200).json({
        message: 'success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
