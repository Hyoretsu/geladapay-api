import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IRetailersRepository from '../repositories/IRetailersRepository';

import Retailer from '../infra/typeorm/entities/Retailer';

interface IRequest {
 email: string;
 password: string;
}

interface IResponse {
 retailer: Retailer;
 token: string;
}

@injectable()
export default class AuthenticateRetailerService {
 constructor(
  @inject('RetailersRepository')
  private retailersRepository: IRetailersRepository,

  @inject('HashProvider')
  private hashProvider: IHashProvider,
 ) {}

 public async execute({ email, password }: IRequest): Promise<IResponse> {
  const retailer = await this.retailersRepository.findByEmail(email);

  if (!retailer) {
   throw new AppError('Email ou senha estão errados. Tente novamente.', 401);
  }

  const passwordMatched = await this.hashProvider.compareHash(password, retailer.password);

  if (!passwordMatched) {
   throw new AppError('Email ou senha estão errados. Tente novamente.', 401);
  }

  const { secret, expiresIn } = authConfig.jwt;

  const token = sign({}, secret, {
   subject: retailer.id,
   expiresIn,
  });

  return {
   retailer,
   token,
  };
 }
}
