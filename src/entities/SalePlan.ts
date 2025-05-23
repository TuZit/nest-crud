import { Column, Entity, Index } from 'typeorm';

@Index('PK_sale_plan', ['id'], { unique: true })
@Entity('sale_plan', { schema: 'public' })
export class SalePlan {
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

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('timestamp without time zone', { name: 'plan_for_day' })
  planForDay: Date;

  @Column('integer', { name: 'po_facebook', nullable: true })
  poFacebook: number | null;

  @Column('integer', { name: 'po_google', nullable: true })
  poGoogle: number | null;

  @Column('integer', { name: 'po_pinterest', nullable: true })
  poPinterest: number | null;

  @Column('integer', { name: 'po_total_quantity', default: () => '0' })
  poTotalQuantity: number;
}
