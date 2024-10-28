import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { Request, Response, NextFunction } from 'express';

export const dtoValidate = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = plainToInstance(dto, req.body);
    const errors = await validate(data);

    if (errors.length > 0) {
      res.status(400).json({ message: 'failed', errors });
    }

    req.body = data;
    next();
  };
};
