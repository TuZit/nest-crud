import { Column, Entity } from 'typeorm';

@Entity('fulfillment_variant_fulfillment_version1', { schema: 'public' })
export class FulfillmentVariantFulfillmentVersion1 {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'fulfillment_variant_id', nullable: true })
  fulfillmentVariantId: string | null;
}
