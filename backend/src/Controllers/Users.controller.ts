import { UsersService } from '../Services/Users.service';
import { Request, Response, NextFunction } from 'express';

export class UsersController {
  private _usersService: UsersService;

  constructor() {
    this._usersService = new UsersService();
  }

  getAllPosts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._usersService.getAllUsers();
      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data = await this._usersService.getUserById(id);
      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      next(error);
    }
  };
}
