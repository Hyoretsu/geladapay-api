import { Repository, getRepository } from 'typeorm';

import IRetailersRepository from '@modules/retailers/repositories/IRetailersRepository';
import ICreateRetailerDTO from '@modules/retailers/dtos/ICreateRetailerDTO';

import Retailer from '../entities/Retailer';

export default class RetailersRepository implements IRetailersRepository {
 private ormRepository: Repository<Retailer>;

 constructor() {
  this.ormRepository = getRepository(Retailer);
 }

 public async create(data: ICreateRetailerDTO): Promise<Retailer> {
  const retailer = this.ormRepository.create(data);

  await this.ormRepository.save(retailer);

  return retailer;
 }

 public async findByCNPJ(cnpj: number): Promise<Retailer | undefined> {
  const retailer = await this.ormRepository.findOne({
   where: {
    cnpj,
   },
  });

  return retailer;
 }

 public async findByEmail(email: string): Promise<Retailer | undefined> {
  const retailer = await this.ormRepository.findOne({
   where: {
    email,
   },
  });

  return retailer;
 }

 public async findById(id: string): Promise<Retailer | undefined> {
  const retailer = await this.ormRepository.findOne(id);

  return retailer;
 }

 public async save(retailer: Retailer): Promise<Retailer> {
  await this.ormRepository.save(retailer);

  return retailer;
 }
}
