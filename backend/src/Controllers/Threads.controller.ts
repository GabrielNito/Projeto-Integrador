import { JWTPayload } from 'jose';

import { Request, Response, NextFunction } from 'express';
import { ThreadsService } from '../Services/Threads.service';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JWTPayload;
  }
}

export class ThreadsController {
  private _threadsService: ThreadsService;

  constructor() {
    this._threadsService = new ThreadsService();
  }

  getAllThreads = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._threadsService.getAllThreads();
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  getThreadById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const data = await this._threadsService.getThreadById(id);
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  createThread = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user?.id;
    try {
      const data = await this._threadsService.createThread(req.body, req);
      res.status(201).json({
        data,
        message: 'Thread created successfully',
      });
    } catch (error) {
      next(error);
    }
  };
}
