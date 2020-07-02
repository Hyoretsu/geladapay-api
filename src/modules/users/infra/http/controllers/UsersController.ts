import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class ExamplesController {
 public async create(req: Request, res: Response): Promise<Response> {
  const { name, phone, password } = req.body;

  const createUser = container.resolve(CreateUserService);

  const user = await createUser.execute({
   name,
   phone,
   password,
  });

  return res.json(user);
 }
}
