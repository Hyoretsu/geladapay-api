import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

@injectable()
export default class CreateUserService {
 constructor(
  @inject('UsersRepository')
  private usersRepository: IUsersRepository,

  @inject('HashProvider')
  private hashProvider: IHashProvider,
 ) {}

 public async execute({ name, email, cpf, phone, password }: ICreateUserDTO): Promise<User> {
  const existingCPF = await this.usersRepository.findByCPF(cpf);

  if (existingCPF) {
   throw new AppError('Um usuário com este CPF já existe. Tente novamente.', 409);
  }

  const existingPhone = await this.usersRepository.findByPhone(phone);

  if (existingPhone.length !== 0) {
   throw new AppError('Um usuário com este número de telefone já existe. Tente novamente.', 409);
  }

  const hashedPassword = await this.hashProvider.generateHash(password);

  const user = await this.usersRepository.create({
   name,
   email,
   cpf,
   phone,
   password: hashedPassword,
  });

  return user;
 }
}
