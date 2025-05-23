import { Column, Entity } from 'typeorm';

@Entity('z_mapping_sale_fulfillment_variant', { schema: 'public' })
export class ZMappingSaleFulfillmentVariant {
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

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;
}
