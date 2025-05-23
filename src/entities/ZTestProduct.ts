import { Column, Entity } from 'typeorm';

@Entity('z_test_product', { schema: 'public' })
export class ZTestProduct {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'line', nullable: true })
  line: string | null;

  @Column('text', { name: 'family', nullable: true })
  family: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'sale_status', nullable: true })
  saleStatus: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('double precision', {
    name: 'surplus_ratio',
    nullable: true,
    precision: 53
  })
  surplusRatio: number | null;

  @Column('jsonb', { name: 'images_uri', nullable: true })
  imagesUri: object | null;

  @Column('text', { name: 'contract_form', nullable: true })
  contractForm: string | null;

  @Column('boolean', { name: 'is_core_variant', nullable: true })
  isCoreVariant: boolean | null;

  @Column('text', {
    name: 'column_variant_display',
    nullable: true,
    array: true
  })
  columnVariantDisplay: string[] | null;

  @Column('boolean', { name: 'is_core_product', nullable: true })
  isCoreProduct: boolean | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'row_variant_display', nullable: true, array: true })
  rowVariantDisplay: string[] | null;

  @Column('text', { name: 'moq_tracking_status', nullable: true })
  moqTrackingStatus: string | null;

  @Column('boolean', { name: 'exist_product_core', nullable: true })
  existProductCore: boolean | null;
}
