import { JWTPayload } from 'jose';
import { UsersService } from '../Services/Users.service';
import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JWTPayload;
  }
}
export class UsersController {
  private _usersService: UsersService;

  constructor() {
    this._usersService = new UsersService();
  }

  getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
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

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdUser = await this._usersService.createUser(req.body);
      res.status(201).json({ message: 'User created successfully', data: createdUser });
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, id: req.user?.id };
    try {
      const updatedUser = await this._usersService.updateUser(req.body);
      res.status(201).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this._usersService.deleteUser(req);
      res.status(202).json({ message: 'User deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
