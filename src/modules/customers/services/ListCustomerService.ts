import { getCustomRepository } from 'typeorm';
import Custumer from '../typeorm/entities/Customer';
import { CustomersRepository } from '../typeorm/repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Custumer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.find();
    return customer;
  }
}

export default ListCustomerService;
