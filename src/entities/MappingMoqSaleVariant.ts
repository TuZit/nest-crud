import { Column, Entity, Index } from 'typeorm';

@Index('PK_mapping_moq_sale_variant', ['id'], { unique: true })
@Entity('mapping_moq_sale_variant', { schema: 'public' })
export class MappingMoqSaleVariant {
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

  @Column('text', { name: 'moq_sale_request_id', nullable: true })
  moqSaleRequestId: string | null;

  @Column('text', { name: 'product_origin_id', nullable: true })
  productOriginId: string | null;

  @Column('text', {
    name: 'not_selected_destinate_properties',
    nullable: true,
    array: true
  })
  notSelectedDestinateProperties: string[] | null;

  @Column('text', { name: 'product_destinate_id', nullable: true })
  productDestinateId: string | null;

  @Column('text', {
    name: 'selected_destinate_properties',
    nullable: true,
    array: true
  })
  selectedDestinateProperties: string[] | null;

  @Column('text', {
    name: 'selected_source_properties',
    nullable: true,
    array: true
  })
  selectedSourceProperties: string[] | null;
}
