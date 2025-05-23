import { Column, Entity, Index } from 'typeorm';

@Index('PK_mapping_moq_sale_variant_detail', ['id'], { unique: true })
@Entity('mapping_moq_sale_variant_detail', { schema: 'public' })
export class MappingMoqSaleVariantDetail {
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

  @Column('text', { name: 'mapping_moq_sale_variant_id', nullable: true })
  mappingMoqSaleVariantId: string | null;

  @Column('jsonb', { name: 'source_propety', nullable: true })
  sourcePropety: object | null;

  @Column('jsonb', { name: 'destinate_property', nullable: true })
  destinateProperty: object | null;
}
