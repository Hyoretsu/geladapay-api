import { getRepository, Repository, Like } from 'typeorm';

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

 public async findByCPF(cpf: number): Promise<User | undefined> {
  const user = await this.ormRepository.findOne({
   where: {
    cpf,
   },
  });

  return user;
 }

 public async findByName(name: string): Promise<User[]> {
  const users = await this.ormRepository.find({
   where: {
    name: Like(`%${name}%`),
   },
  });

  return users;
 }

 public async findByPhone(phone: number): Promise<User[]> {
  const existingUser = await this.ormRepository.find({
   where: {
    phone: Like(`${phone}`),
   },
  });

  return existingUser;
 }
}
