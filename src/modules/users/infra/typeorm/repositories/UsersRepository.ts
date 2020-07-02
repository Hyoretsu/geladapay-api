import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
 private ormRepository: Repository<User>;

 constructor() {
  this.ormRepository = getRepository(User);
 }

 public async create(data: ICreateUserDTO): Promise<User> {
  const user = this.ormRepository.create(data);

  await this.ormRepository.save(user);

  return user;
 }
}