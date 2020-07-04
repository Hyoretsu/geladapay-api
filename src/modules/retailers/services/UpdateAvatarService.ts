import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IRetailersRepository from '../repositories/IRetailersRepository';

import Retailer from '../infra/typeorm/entities/Retailer';

interface IRequest {
 user_id: string;
 imageFilename: string;
}

@injectable()
export default class UpdateUserAvatarService {
 constructor(
  @inject('RetailersRepository')
  private retailersRepository: IRetailersRepository,

  @inject('StorageProvider')
  private storageProvider: IStorageProvider,
 ) {}

 public async execute({ user_id, imageFilename }: IRequest): Promise<Retailer> {
  const retailer = await this.retailersRepository.findById(user_id);

  if (!retailer) {
   throw new AppError('Você deve estar logado para mudar a sua imagem.', 404);
  }

  if (retailer.image) {
   await this.storageProvider.deleteFile(retailer.image);
  }

  const filename = await this.storageProvider.saveFile(imageFilename);

  retailer.image = filename;

  await this.retailersRepository.save(retailer);

  return retailer;
 }
}
