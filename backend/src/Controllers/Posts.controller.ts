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

  getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = await this._postService.findPostById(id);
    try {
      res.status(200).json({
        message: 'success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._postService.createPost(req.body, req);
      res.status(201).json({
        message: 'Post created successfully',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
