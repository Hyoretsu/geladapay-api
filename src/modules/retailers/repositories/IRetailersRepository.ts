import Retailer from '../infra/typeorm/entities/Retailer';

import ICreateRetailerDTO from '../dtos/ICreateRetailerDTO';

export default interface IRetailersRepository {
 create(data: ICreateRetailerDTO): Promise<Retailer>;
}
