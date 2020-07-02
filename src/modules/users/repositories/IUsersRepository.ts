import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
 create(data: ICreateUserDTO): Promise<User>;
 findByName(name: string): Promise<User[]>;
 findByPhone(phone: number): Promise<User[]>;
}
