import { Column, Entity, Index } from 'typeorm';

@Index('PK_mapping_variant_config', ['id'], { unique: true })
@Index('idx_mapping_variant_config_product_id', ['productId'], {})
@Entity('mapping_variant_config', { schema: 'public' })
export class MappingVariantConfig {
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

  @Column('text', {
    name: 'selected_core_properties',
    nullable: true,
    array: true
  })
  selectedCoreProperties: string[] | null;

  @Column('text', {
    name: 'selected_basic_properties',
    nullable: true,
    array: true
  })
  selectedBasicProperties: string[] | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'mapping_version_id', nullable: true })
  mappingVersionId: string | null;
}
