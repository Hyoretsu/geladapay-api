import { container } from 'tsyringe';

import './providers';

import IRetailersRepository from '@modules/retailers/repositories/IRetailersRepository';
import RetailersRepository from '@modules/retailers/infra/typeorm/repositories/RetailersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IRetailersRepository>('RetailersRepository', RetailersRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
