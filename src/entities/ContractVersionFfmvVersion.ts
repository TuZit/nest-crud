import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { Factory } from './Factory';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('IX_contract_version_ffmv_version_contract_version_id', ['contractVersionId'], {})
@Index('IX_contract_version_ffmv_version_factory_id', ['factoryId'], {})
@Index('IX_contract_version_ffmv_version_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_contract_version_ffmv_version', ['id'], { unique: true })
@Index('IX_contract_version_ffmv_version_product_id', ['productId'], {})
@Index('IX_contract_version_ffmv_version_supplier_id', ['supplierId'], {})
@Entity('contract_version_ffmv_version', { schema: 'public' })
export class ContractVersionFfmvVersion {
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

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('integer', { name: 'ratio' })
  ratio: number;

  @Column('integer', { name: 'priority', nullable: true })
  priority: number | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.contractVersionFfmvVersions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Factory, (factory) => factory.contractVersionFfmvVersions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.contractVersionFfmvVersions,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => Product, (product) => product.contractVersionFfmvVersions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Supplier, (supplier) => supplier.contractVersionFfmvVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
