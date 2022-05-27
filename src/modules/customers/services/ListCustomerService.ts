import { getCustomRepository } from 'typeorm';
import Costumer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Costumer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const costumer = await customersRepository.find();
    return costumer;
  }
}

export default ListCustomerService;
