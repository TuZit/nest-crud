import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('PK_product_supplier', ['productId', 'supplierId'], { unique: true })
@Index('IX_product_supplier_supplier_id', ['supplierId'], {})
@Entity('product_supplier', { schema: 'public' })
export class ProductSupplier {
  @Column('text', { primary: true, name: 'product_id' })
  productId: string;

  @Column('text', { primary: true, name: 'supplier_id' })
  supplierId: string;

  @Column('timestamp without time zone', {
    name: 'created',
    default: () => "'0001-01-01 00:00:00'"
  })
  created: Date;

  @Column('numeric', { name: 'request_distribution_ratio', nullable: true })
  requestDistributionRatio: string | null;

  @Column('jsonb', { name: 'list_fulfillment_version', nullable: true })
  listFulfillmentVersion: object | null;

  @Column('boolean', { name: 'is_crossian_shipping_line', nullable: true })
  isCrossianShippingLine: boolean | null;

  @Column('jsonb', { name: 'update_by', nullable: true })
  updateBy: object | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @ManyToOne(() => Product, (product) => product.productSuppliers, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.productSuppliers, {
  //   onDelete: 'CASCADE'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
