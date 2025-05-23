import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Distribution } from './Distribution';
import { ContractVersion } from './ContractVersion';
import { Factory } from './Factory';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('IX_distribution_daily_contract_version_id', ['contractVersionId'], {})
@Index('IX_distribution_daily_factory_id', ['factoryId'], {})
@Index('IX_distribution_daily_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_distribution_daily', ['id'], { unique: true })
@Index('IX_distribution_daily_product_id', ['productId'], {})
@Index('IX_distribution_daily_supplier_id', ['supplierId'], {})
@Entity('distribution_daily', { schema: 'public' })
export class DistributionDaily {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('timestamp without time zone', { name: 'day' })
  day: Date;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('integer', { name: 'ratio' })
  ratio: number;

  @Column('integer', { name: 'current_do_quantity' })
  currentDoQuantity: number;

  @Column('integer', { name: 'current_po_quantity' })
  currentPoQuantity: number;

  @Column('integer', { name: 'estimate_do_quantity' })
  estimateDoQuantity: number;

  @Column('integer', { name: 'estimate_po_quantity' })
  estimatePoQuantity: number;

  @Column('boolean', { name: 'is_auto_distribution_ratio', nullable: true })
  isAutoDistributionRatio: boolean | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @OneToMany(() => Distribution, (distribution) => distribution.distributionDaily)
  distributions: Distribution[];

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.distributionDailies, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Factory, (factory) => factory.distributionDailies, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.distributionDailies,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => Product, (product) => product.distributionDailies, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Supplier, (supplier) => supplier.distributionDailies, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
