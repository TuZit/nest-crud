import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { Variant } from './Variant';

@Index('IX_inventory_contract_version_id', ['contractVersionId'], {})
@Index('PK_inventory', ['id'], { unique: true })
@Index('IX_inventory_product_id', ['productId'], {})
@Index('IX_inventory_supplier_id', ['supplierId'], {})
@Index('IX_inventory_variant_id', ['variantId'], {})
@Entity('inventory', { schema: 'public' })
export class Inventory {
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

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('integer', { name: 'instock' })
  instock: number;

  @Column('integer', { name: 'intransit' })
  intransit: number;

  @Column('boolean', { name: 'is_moq', nullable: true })
  isMoq: boolean | null;

  @Column('numeric', { name: 'product_cost', nullable: true })
  productCost: string | null;

  @Column('integer', { name: 'stockout', default: () => '0' })
  stockout: number;

  @Column('numeric', { name: 'unit_price', nullable: true })
  unitPrice: string | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.inventories, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Product, (product) => product.inventories, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.inventories, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => Variant, (variant) => variant.inventories, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
