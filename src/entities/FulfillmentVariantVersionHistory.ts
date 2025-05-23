import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';

@Index('IX_fulfillment_variant_version_history_fulfillment_variant_ver~', ['fulfillmentVariantVersionId'], {})
@Index('PK_fulfillment_variant_version_history', ['id'], { unique: true })
@Entity('fulfillment_variant_version_history', { schema: 'public' })
export class FulfillmentVariantVersionHistory {
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

  @Column('text', { name: 'action', nullable: true })
  action: string | null;

  @Column('text', { name: 'field_name', nullable: true })
  fieldName: string | null;

  @Column('text', { name: 'old_value', nullable: true })
  oldValue: string | null;

  @Column('text', { name: 'new_value', nullable: true })
  newValue: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('jsonb', { name: 'account', nullable: true })
  account: object | null;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.fulfillmentVariantVersionHistories,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;
}
