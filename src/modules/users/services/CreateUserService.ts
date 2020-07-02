import { injectable, inject } from 'tsyringe';

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

 public async execute({ name, phone, password }: ICreateUserDTO): Promise<User> {
  const hashedPassword = await this.hashProvider.generateHash(password);

  const user = await this.usersRepository.create({
   name,
   phone,
   password: hashedPassword,
  });

  return user;
 }
}
