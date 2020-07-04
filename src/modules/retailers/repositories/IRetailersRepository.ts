import Retailer from '../infra/typeorm/entities/Retailer';

import ICreateRetailerDTO from '../dtos/ICreateRetailerDTO';

export default interface IRetailersRepository {
 create(data: ICreateRetailerDTO): Promise<Retailer>;
 findByCNPJ(cnpj: number): Promise<Retailer | undefined>;
 findById(user_id: string): Promise<Retailer | undefined>;
 findByEmail(email: string): Promise<Retailer | undefined>;
 save(retailer: Retailer): Promise<Retailer>;
}
