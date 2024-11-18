import { NextFunction, Request, Response } from "express";
import { LoginService } from "../Services/Login.service";

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
        res.status(400).json({ message: "Invalid email or password" });
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
        res.status(400).json({ message: "Invalid token" });
      }

      const data = await this._loginService.authenticateByToken(token);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}
