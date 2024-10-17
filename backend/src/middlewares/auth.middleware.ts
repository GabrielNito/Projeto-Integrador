import { Request, Response, NextFunction } from 'express';
import * as jose from 'jose';
import dotenv from 'dotenv';

dotenv.config();

declare module 'express-serve-static-core' {
  interface Request {
    user?: jose.JWTPayload;
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'token not found' });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const data = await jose.jwtVerify(token, secret);
    if (!data) {
      return res.status(401).json({ message: 'invalid token' });
    }

    req.user = data.payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'invalid token' });
  }
};