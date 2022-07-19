import { DataSource } from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

import { CreateProducts1647799186728 } from './migrations/1647799186728-CreateProducts';
import { CreateUsers1648118462234 } from './migrations/1648118462234-CreateUsers';
import { CreateUserTokens1650284845769 } from './migrations/1650284845769-CreateUserTokens';
import { CreateCustomers1653478925732 } from './migrations/1653478925732-CreateCustomers';
import { CreateOrders1653654505696 } from './migrations/1653654505696-CreateOrders';
import { AddCustomerIdToOrders1653654686211 } from './migrations/1653654686211-AddCustomerIdToOrders';
import { CreateOrdersProducts1653655383192 } from './migrations/1653655383192-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1653655557199 } from './migrations/1653655557199-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1653656066338 } from './migrations/1653656066338-AddProductIdToOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1647799186728,
    CreateUsers1648118462234,
    CreateUserTokens1650284845769,
    CreateCustomers1653478925732,
    CreateOrders1653654505696,
    AddCustomerIdToOrders1653654686211,
    CreateOrdersProducts1653655383192,
    AddOrderIdToOrdersProducts1653655557199,
    AddProductIdToOrdersProducts1653656066338,
  ],
});
