import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_sale_request_sold_data', ['id'], { unique: true })
@Entity('moq_sale_request_sold_data', { schema: 'public' })
export class MoqSaleRequestSoldData {
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

  @Column('text', { name: 'sale_request_id', nullable: true })
  saleRequestId: string | null;

  @Column('text', { name: 'sale_variant_id', nullable: true })
  saleVariantId: string | null;

  @Column('text', { name: 'sale_variant_code', nullable: true })
  saleVariantCode: string | null;

  @Column('integer', { name: 'sold_quantity', nullable: true })
  soldQuantity: number | null;

  @Column('numeric', { name: 'sold_ratio', nullable: true })
  soldRatio: string | null;
}
