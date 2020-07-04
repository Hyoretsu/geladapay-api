import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateRetailerService from '@modules/retailers/services/AuthenticateRetailerService';

export default class SessionController {
 public async create(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body;

  const authenticateRetailer = container.resolve(AuthenticateRetailerService);

  const { retailer, token } = await authenticateRetailer.execute({
   email,
   password,
  });

  return res.json({ user: classToClass(retailer), token });
 }
}
