import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { validate } from 'class-validator';
import { User } from '../entities/user.entity';

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  const { first_name, last_name, email, date_of_birth, accept_terms_of_service } = req.body;

  const user = new User();
  user.first_name = first_name;
  user.last_name = last_name;
  user.email = email;
  user.date_of_birth = date_of_birth;
  user.accept_terms_of_service = accept_terms_of_service;

  const errors = await validate(user);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const newUser = await userService.createUser(user);
    res.status(201).json(newUser);
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes('duplicate key value violates unique constraint')) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
};
