import { UsersService } from '../Services/Users.service';
import { Request, Response, NextFunction } from 'express';

export class UsersController {
  private _usersService: UsersService;

  constructor() {
    this._usersService = new UsersService();
  }

  getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._usersService.getAllUsers();
      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      next(error);
    }
  };
}
