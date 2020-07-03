import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateRetailerService from '@modules/retailers/services/CreateRetailerService';

export default class RetailersController {
 public async create(req: Request, res: Response): Promise<Response> {
  const { name, email, password, cnpj, latitude, longitude, image } = req.body;

  const createRetailer = container.resolve(CreateRetailerService);

  const retailer = createRetailer.execute({
   name,
   email,
   password,
   cnpj,
   latitude,
   longitude,
   image,
  });

  return res.json(classToClass(retailer));
 }
}