import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import { IProduct } from '@modules/products/domain/models/IProduct';

@Entity('products')
class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => OrdersProducts, x => x.product)
  order_products: OrdersProducts[];

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
export default Product;
