import { Request, Response, NextFunction } from 'express';
import { ThreadsService } from '../Services/Threads.service';
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
      const data = await this._threadsService.getThreadsById(id);
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
