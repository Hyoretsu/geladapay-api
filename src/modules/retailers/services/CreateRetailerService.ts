import { injectable, inject } from 'tsyringe';

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import ICreateRetailerDTO from '../dtos/ICreateRetailerDTO';
import IRetailersRepository from '../repositories/IRetailersRepository';

import Retailer from '../infra/typeorm/entities/Retailer';

@injectable()
export default class CreateRetailerService {
 constructor(
  @inject('RetailersRepository')
  private retailersRepository: IRetailersRepository,

  @inject('HashProvider')
  private hashProvider: IHashProvider,
 ) {}

 public async execute({ name, email, password, cnpj, image }: ICreateRetailerDTO): Promise<Retailer> {
  const hashedPassword = await this.hashProvider.generateHash(password);

  const retailer = await this.retailersRepository.create({
   name,
   email,
   cnpj,
   password: hashedPassword,
   image,
  });

  return retailer;
 }
}
