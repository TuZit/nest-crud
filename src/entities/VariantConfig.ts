import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';

@Index('IX_variant_config_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_variant_config', ['id'], { unique: true })
@Entity('variant_config', { schema: 'public' })
export class VariantConfig {
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

  @Column('json', { name: 'configs', nullable: true })
  configs: object | null;

  @Column('boolean', { name: 'is_core' })
  isCore: boolean;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('jsonb', { name: 'sorted_map', nullable: true })
  sortedMap: object | null;

  @Column('jsonb', { name: 'copied_option', nullable: true })
  copiedOption: object | null;

  @ManyToOne(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.variantConfigs, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;
}
