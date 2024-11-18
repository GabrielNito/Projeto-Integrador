<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";
import { LoginService } from "../Services/Login.service";
=======
import { NextFunction, Request, Response } from 'express';
import { LoginService } from '../Services/Login.service';
>>>>>>> 9ecd2fb4198899c76aa3283cae1308a5602648ce

export class LoginController {
  private _loginService: LoginService;

  constructor() {
    this._loginService = new LoginService();
  }

  authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
<<<<<<< HEAD
        res.status(400).json({ message: "Invalid email or password" });
=======
        res.status(400).json({ message: 'Invalid email or password' });
>>>>>>> 9ecd2fb4198899c76aa3283cae1308a5602648ce
      }
      const token = await this._loginService.authenticate(email, password);
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  };

  authenticateByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { token } = req.body;
    try {
      if (!token) {
<<<<<<< HEAD
        res.status(400).json({ message: "Invalid token" });
=======
        res.status(400).json({ message: 'Invalid token' });
>>>>>>> 9ecd2fb4198899c76aa3283cae1308a5602648ce
      }

      const data = await this._loginService.authenticateByToken(token);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}
