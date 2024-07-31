import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { User } from '../entities/user.entity';

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = Object.assign(new User(), req.body);
  const errors = await validate(user);

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  next();
};
