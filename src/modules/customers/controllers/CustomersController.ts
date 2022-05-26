import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();

    return response.json(customers);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomers = new ShowCustomerService();
    const customer = await showCustomers.execute({ id });

    return response.json(customer);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createProduct = new CreateCustomerService();

    const customer = await createProduct.execute({
      name,
      email,
    });

    return response.json(customer);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCustomer = new UpdateCustomerService();
    const product = await updateCustomer.execute({ id, name, email });

    return response.json(product);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ id });

    return response.status(204).json();
  }
}
