import { Request, Response, NextFunction } from 'express';
import { ThreadsService } from '../Services/Threads.service';
import { CreateThreadsDTO } from '../Dtos/create/CreateThreadsDTO.dto';
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
    const body: CreateThreadsDTO = req.body;
    try {
      const data = await this._threadsService.createThread(body);
      res.status(201).json({
        data,
        message: 'Thread created successfully',
      });
    } catch (error) {
      next(error);
    }
  };
}
