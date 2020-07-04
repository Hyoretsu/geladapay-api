import { injectable, inject } from 'tsyringe';
import fetch from 'node-fetch';

import AppError from '@shared/errors/AppError';

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import ICreateRetailerRequestDTO from '../dtos/ICreateRetailerRequestDTO';
import IRetailersRepository from '../repositories/IRetailersRepository';

import Retailer from '../infra/typeorm/entities/Retailer';

interface IRequest {
 lat: number;
 lon: number;
}

@injectable()
export default class CreateRetailerService {
 constructor(
  @inject('RetailersRepository')
  private retailersRepository: IRetailersRepository,

  @inject('HashProvider')
  private hashProvider: IHashProvider,
 ) {}

 public async execute({
  name,
  email,
  password,
  cnpj,
  address,
  city,
  state,
 }: ICreateRetailerRequestDTO): Promise<Retailer> {
  let latitude = 0;
  let longitude = 0;

  await fetch(
   `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_TOKEN}&q=${address},${city},${state}&format=json`,
  )
   .then<IRequest[]>(res => res.json())
   .then(data => {
    latitude = data[0].lat;
    longitude = data[0].lon;
   });

  const existingRetailer = this.retailersRepository.findByCNPJ(cnpj);

  if (existingRetailer) {
   throw new AppError('Um vendedor com este CNPJ já está cadastrado. Tente novamente.');
  }

  const hashedPassword = await this.hashProvider.generateHash(password);

  const retailer = await this.retailersRepository.create({
   name,
   email,
   cnpj,
   password: hashedPassword,
   latitude,
   longitude,
  });

  return retailer;
 }
}
