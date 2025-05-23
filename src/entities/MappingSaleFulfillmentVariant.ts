import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Variant } from './Variant';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { MappingVersion } from './MappingVersion';
import { Product } from './Product';

@Index('IX_mapping_sale_fulfillment_variant_fulfillment_variant_id', ['fulfillmentVariantId'], {})
@Index('IX_mapping_sale_fulfillment_variant_fulfillment_variant_versio~', ['fulfillmentVariantVersionId'], {})
@Index('PK_mapping_sale_fulfillment_variant', ['id'], { unique: true })
@Index('IX_mapping_sale_fulfillment_variant_mapping_version_id', ['mappingVersionId'], {})
@Index('IX_mapping_sale_fulfillment_variant_product_id', ['productId'], {})
@Index('IX_mapping_sale_fulfillment_variant_sale_variant_id', ['saleVariantId'], {})
@Entity('mapping_sale_fulfillment_variant', { schema: 'public' })
export class MappingSaleFulfillmentVariant {
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

  @Column('text', { name: 'sale_variant_id', nullable: true })
  saleVariantId: string | null;

  @Column('text', { name: 'fulfillment_variant_id', nullable: true })
  fulfillmentVariantId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'mapping_version_id', nullable: true })
  mappingVersionId: string | null;

  // @ManyToOne(() => Variant, (variant) => variant.mappingSaleFulfillmentVariants, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'fulfillment_variant_id', referencedColumnName: 'id' }])
  fulfillmentVariant: Variant;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.mappingSaleFulfillmentVariants,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => MappingVersion, (mappingVersion) => mappingVersion.mappingSaleFulfillmentVariants, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'mapping_version_id', referencedColumnName: 'id' }])
  mappingVersion: MappingVersion;

  @ManyToOne(() => Product, (product) => product.mappingSaleFulfillmentVariants, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Variant, (variant) => variant.mappingSaleFulfillmentVariants2, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'sale_variant_id', referencedColumnName: 'id' }])
  saleVariant: Variant;
}
