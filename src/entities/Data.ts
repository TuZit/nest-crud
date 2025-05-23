import { Column, Entity } from 'typeorm';

@Entity('data', { schema: 'public' })
export class Data {
  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;
}
