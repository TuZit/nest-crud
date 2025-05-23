import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { Distribution } from './Distribution';
import { Do } from './Do';
import { DoCopy1 } from './DoCopy1';

@Index('IX_contract_quantity_contract_version_id', ['contractVersionId'], {})
@Index('PK_contract_quantity', ['id'], { unique: true })
@Index('IX_contract_quantity_product_id', ['productId'], {})
@Index('IX_contract_quantity_supplier_id', ['supplierId'], {})
@Entity('contract_quantity', { schema: 'public' })
export class ContractQuantity {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('numeric', { name: 'amount' })
  amount: string;

  @Column('numeric', { name: 'product_cost' })
  productCost: string;

  @Column('numeric', { name: 'shipping_cost' })
  shippingCost: string;

  @Column('numeric', { name: 'packing_cost' })
  packingCost: string;

  @Column('text', { name: 'carrier', nullable: true })
  carrier: string | null;

  @Column('text', { name: 'specific_item', nullable: true })
  specificItem: string | null;

  @Column('integer', { name: 'order_number', default: () => '0' })
  orderNumber: number;

  @Column('text', { name: 'row_id', nullable: true })
  rowId: string | null;

  @Column('numeric', { name: 'merchandise_cost_factory', nullable: true })
  merchandiseCostFactory: string | null;

  @Column('numeric', { name: 'tariff_cost', nullable: true })
  tariffCost: string | null;

  @Column('numeric', { name: 'tariff_handling_fee', nullable: true })
  tariffHandlingFee: string | null;

  @Column('text', { name: 'created_by_role', nullable: true })
  createdByRole: string | null;

  @Column('numeric', { name: 'shipping_handling_cost', nullable: true })
  shippingHandlingCost: string | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.contractQuantities, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Product, (product) => product.contractQuantities, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Supplier, (supplier) => supplier.contractQuantities, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @OneToMany(() => Distribution, (distribution) => distribution.contractQuantity)
  distributions: Distribution[];

  // @OneToMany(()=>Do,do=>do.contractQuantity)

  dos: Do[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.contractQuantity)
  doCopies: DoCopy1[];
}
