import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IFindUserDTO {
 name?: string;
 phone?: number;
}

@injectable()
export default class FindUserService {
 constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

 public async execute({ name, phone }: IFindUserDTO): Promise<User[]> {
  let user: User[] = [];

  if (name) {
   user = await this.usersRepository.findByName(name);
  }
  if (phone) {
   user = await this.usersRepository.findByPhone(phone);
  }

  if (user.length === 0 || null) {
   throw new AppError('Nenhum usário foi encontrado. Tente novamente.', 404);
  }

  return user;
 }
}
