import { Column, Entity } from 'typeorm';

@Entity('z_mapping_variant_ratio', { schema: 'public' })
export class ZMappingVariantRatio {
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

  @Column('text', { name: 'basic_variant_id', nullable: true })
  basicVariantId: string | null;

  @Column('text', { name: 'core_variant_id', nullable: true })
  coreVariantId: string | null;

  @Column('text', { name: 'source_product_id', nullable: true })
  sourceProductId: string | null;

  @Column('text', { name: 'destination_product_id', nullable: true })
  destinationProductId: string | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('timestamp without time zone', {
    name: 'status_date_inactive',
    nullable: true
  })
  statusDateInactive: Date | null;

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;
}
