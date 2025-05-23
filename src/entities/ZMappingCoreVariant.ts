import { Column, Entity } from 'typeorm';

@Entity('z_mapping_core_variant', { schema: 'public' })
export class ZMappingCoreVariant {
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

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;
}
