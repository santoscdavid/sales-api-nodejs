import { getCustomRepository } from 'typeorm';
import Product from '../infra/typeorm/entities/Product';
import { ProductRepository } from '../infra/typeorm/repositories/ProductsRepository';
import RedisCache from '@shared/cache/RedisCache';

// interface IPaginateProduct {
//   from: number;
//   to: number;
//   per_page: number;
//   total: number;
//   current_page: number;
//   prev_page: number | null;
//   next_page: number | null;
//   data: Product[];
// }
class ListPRoductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'sales-api-PRODUCT_LIST',
    );

    if (!products) {
      products = await productRepository.find();

      await redisCache.save('sales-api-PRODUCT_LIST', products);
    }

    return products;
    // as IPaginateProduct;
  }
}

export default ListPRoductService;
