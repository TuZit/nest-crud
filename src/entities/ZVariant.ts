import { Column, Entity } from 'typeorm';

@Entity('z_variant', { schema: 'public' })
export class ZVariant {
  @Column('text', { name: 'id' })
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'image_uri', nullable: true })
  imageUri: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'contract_form', nullable: true })
  contractForm: string | null;

  @Column('text', { name: 'variation_type', nullable: true })
  variationType: string | null;

  @Column('boolean', { name: 'is_core', nullable: true })
  isCore: boolean | null;

  @Column('text', { name: 'core_status', nullable: true })
  coreStatus: string | null;

  @Column('boolean', { name: 'is_moq', nullable: true })
  isMoq: boolean | null;

  @Column('jsonb', { name: 'not_show', nullable: true })
  notShow: object | null;

  @Column('text', {
    name: 'fulfillment_variant_version_origin_id',
    nullable: true
  })
  fulfillmentVariantVersionOriginId: string | null;
}
