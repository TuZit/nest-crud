import { Column, Entity } from 'typeorm';

@Entity('moq_sold_data1', { schema: 'public' })
export class MoqSoldData1 {
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

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('timestamp without time zone', {
    name: 'cut_off_start',
    nullable: true
  })
  cutOffStart: Date | null;

  @Column('timestamp without time zone', {
    name: 'cut_off_end',
    nullable: true
  })
  cutOffEnd: Date | null;

  @Column('integer', { name: 'sold_quantity', nullable: true })
  soldQuantity: number | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;
}
