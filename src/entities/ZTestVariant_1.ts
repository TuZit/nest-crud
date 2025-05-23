import { Column, Entity } from 'typeorm';

@Entity('z_test_variant_1', { schema: 'public' })
export class ZTestVariant_1 {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'image_uri', nullable: true })
  imageUri: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'contract_form', nullable: true })
  contractForm: string | null;

  @Column('text', { name: 'variation_type', nullable: true })
  variationType: string | null;

  @Column('boolean', { name: 'is_core', nullable: true })
  isCore: boolean | null;

  @Column('text', { name: 'core_status', nullable: true })
  coreStatus: string | null;
}
