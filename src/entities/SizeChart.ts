import { Column, Entity, Index } from 'typeorm';

@Index('PK_size_chart', ['id'], { unique: true })
@Entity('size_chart', { schema: 'public' })
export class SizeChart {
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

  @Column('text', { name: 'core_version_id', nullable: true })
  coreVersionId: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'supplier_name', nullable: true })
  supplierName: string | null;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('timestamp without time zone', {
    name: 'published_date',
    nullable: true
  })
  publishedDate: Date | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('jsonb', { name: 'measurement_options', nullable: true })
  measurementOptions: object | null;

  @Column('jsonb', { name: 'measurements', nullable: true })
  measurements: object | null;

  @Column('boolean', { name: 'is_existed_core_variant', nullable: true })
  isExistedCoreVariant: boolean | null;

  @Column('text', { name: 'core_version_name', nullable: true })
  coreVersionName: string | null;

  @Column('text', { name: 'created_by_email', nullable: true })
  createdByEmail: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_name', nullable: true })
  fulfillmentVariantVersionName: string | null;

  @Column('text', { name: 'sale_variant_version_id', nullable: true })
  saleVariantVersionId: string | null;
}
