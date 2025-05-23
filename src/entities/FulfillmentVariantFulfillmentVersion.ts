import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Variant } from './Variant';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';

@Index('IX_fulfillment_variant_fulfillment_version_fulfillment_variant~', ['fulfillmentVariantId'], {})
@Index('IX_fulfillment_variant_fulfillment_version_fulfillment_varian~1', ['fulfillmentVariantVersionId'], {})
@Index('PK_fulfillment_variant_fulfillment_version', ['id'], { unique: true })
@Entity('fulfillment_variant_fulfillment_version', { schema: 'public' })
export class FulfillmentVariantFulfillmentVersion {
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

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'fulfillment_variant_id', nullable: true })
  fulfillmentVariantId: string | null;

  // @ManyToOne(() => Variant, (variant) => variant.fulfillmentVariantFulfillmentVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'fulfillment_variant_id', referencedColumnName: 'id' }])
  fulfillmentVariant: Variant;

  // @ManyToOne(
  //   () => FulfillmentVariantVersion,
  //   (fulfillmentVariantVersion) => fulfillmentVariantVersion.fulfillmentVariantFulfillmentVersions,
  //   { onDelete: 'RESTRICT' }
  // )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;
}
