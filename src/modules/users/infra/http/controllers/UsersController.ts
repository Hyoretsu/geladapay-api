import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindUserService from '@modules/users/services/FindUserService';

export default class ExamplesController {
 public async create(req: Request, res: Response): Promise<Response> {
  const { name, email, cpf, phone, password } = req.body;

  const createUser = container.resolve(CreateUserService);

  const user = await createUser.execute({
   name,
   email,
   cpf,
   phone,
   password,
  });

  return res.json(classToClass(user));
 }

 public async index(req: Request, res: Response): Promise<Response> {
  const { name, phone } = req.body;

  const findUser = container.resolve(FindUserService);

  const user = await findUser.execute({
   name,
   phone,
  });

  return res.json(classToClass(user));
 }
}
