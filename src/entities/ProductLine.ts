import { Column, Entity, Index } from 'typeorm';

@Index('PK_product_line', ['id'], { unique: true })
@Entity('product_line', { schema: 'public' })
export class ProductLine {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('numeric', { name: 'shipping_handling_cost_rate' })
  shippingHandlingCostRate: string;

  @Column('jsonb', {
    name: 'shipping_handling_cost_rate_histories',
    nullable: true
  })
  shippingHandlingCostRateHistories: object | null;
}
