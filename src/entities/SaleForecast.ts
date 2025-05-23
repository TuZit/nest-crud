import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Index('PK_sale_forecast', ['id'], { unique: true })
@Index('IX_sale_forecast_product_id', ['productId'], {})
@Entity('sale_forecast', { schema: 'public' })
export class SaleForecast {
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

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.saleForecasts, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
