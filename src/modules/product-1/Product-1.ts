import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('product-1')
export default class Product1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;
}
