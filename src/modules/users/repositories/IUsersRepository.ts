import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
 create(data: ICreateUserDTO): Promise<User>;
 findByCPF(cpf: number): Promise<User | undefined>;
 findByName(name: string): Promise<User[]>;
 findByPhone(phone: number): Promise<User[]>;
}
