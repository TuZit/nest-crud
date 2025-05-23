import { Column, Entity } from 'typeorm';

@Entity('z_mapping_variant', { schema: 'public' })
export class ZMappingVariant {
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

  @Column('text', { name: 'source_variant_id', nullable: true })
  sourceVariantId: string | null;

  @Column('text', { name: 'destination_variant_id', nullable: true })
  destinationVariantId: string | null;

  @Column('text', { name: 'source_product_id', nullable: true })
  sourceProductId: string | null;

  @Column('text', { name: 'destination_product_id', nullable: true })
  destinationProductId: string | null;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'basic_variant_id', nullable: true })
  basicVariantId: string | null;

  @Column('numeric', { name: 'sold_ratio', nullable: true })
  soldRatio: string | null;

  @Column('text', { name: 'source_name', nullable: true })
  sourceName: string | null;

  @Column('jsonb', { name: 'source_properties', nullable: true })
  sourceProperties: object | null;

  @Column('text', { name: 'destination_name', nullable: true })
  destinationName: string | null;

  @Column('jsonb', { name: 'destination_properties', nullable: true })
  destinationProperties: object | null;

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;
}
