import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { Factory } from './Factory';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('IX_fulfillment_score_contract_version_id', ['contractVersionId'], {})
@Index('IX_fulfillment_score_factory_id', ['factoryId'], {})
@Index('IX_fulfillment_score_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_fulfillment_score', ['id'], { unique: true })
@Index('IX_fulfillment_score_product_id', ['productId'], {})
@Index('IX_fulfillment_score_supplier_id', ['supplierId'], {})
@Entity('fulfillment_score', { schema: 'public' })
export class FulfillmentScore {
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

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('numeric', { name: 'pc' })
  pc: string;

  @Column('numeric', { name: 're' })
  re: string;

  @Column('numeric', { name: 'ral' })
  ral: string;

  @Column('double precision', { name: 'score', precision: 53 })
  score: number;

  @Column('timestamp without time zone', {
    name: 'latest_do',
    default: () => "'0001-01-01 00:00:00'"
  })
  latestDo: Date;

  @Column('bigint', { name: 'total_do', default: () => '0' })
  totalDo: string;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.fulfillmentScores, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Factory, (factory) => factory.fulfillmentScores, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  // @ManyToOne(
  //   () => FulfillmentVariantVersion,
  //   (fulfillmentVariantVersion) => fulfillmentVariantVersion.fulfillmentScores,
  //   { onDelete: 'RESTRICT' }
  // )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => Product, (product) => product.fulfillmentScores, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.fulfillmentScores, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
