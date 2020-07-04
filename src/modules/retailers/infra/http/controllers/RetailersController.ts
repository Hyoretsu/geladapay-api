import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateRetailerService from '@modules/retailers/services/CreateRetailerService';

export default class RetailersController {
 public async create(req: Request, res: Response): Promise<Response> {
  const { name, email, password, cnpj, address, city, state } = req.body;

  const createRetailer = container.resolve(CreateRetailerService);

  const retailer = await createRetailer.execute({
   name,
   email,
   password,
   cnpj,
   address,
   city,
   state,
  });

  return res.json(classToClass(retailer));
 }
}
