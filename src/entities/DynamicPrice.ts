import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('IX_dynamic_price_contract_version_id', ['contractVersionId'], {})
@Index('PK_dynamic_price', ['id'], { unique: true })
@Index('IX_dynamic_price_product_id', ['productId'], {})
@Index('IX_dynamic_price_supplier_id', ['supplierId'], {})
@Entity('dynamic_price', { schema: 'public' })
export class DynamicPrice {
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

  @Column('jsonb', { name: 'items', nullable: true })
  items: object | null;

  @Column('numeric', { name: 'product_cost' })
  productCost: string;

  @Column('numeric', { name: 'shipping_cost' })
  shippingCost: string;

  @Column('numeric', { name: 'packing_cost' })
  packingCost: string;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('numeric', { name: 'origin_packing_cost', nullable: true })
  originPackingCost: string | null;

  @Column('numeric', { name: 'origin_product_cost', nullable: true })
  originProductCost: string | null;

  @Column('numeric', { name: 'origin_shipping_cost', nullable: true })
  originShippingCost: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('integer', { name: 'order_number', nullable: true })
  orderNumber: number | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.dynamicPrices, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Product, (product) => product.dynamicPrices, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.dynamicPrices, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
