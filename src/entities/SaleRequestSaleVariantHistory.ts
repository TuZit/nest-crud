import { Column, Entity, Index } from 'typeorm';

@Index('PK_sale_request_sale_variant_history', ['id'], { unique: true })
@Entity('sale_request_sale_variant_history', { schema: 'public' })
export class SaleRequestSaleVariantHistory {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'moq_sale_request_id' })
  moqSaleRequestId: string;

  @Column('numeric', { name: 'total_quantity' })
  totalQuantity: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('numeric', { name: 'ratio', default: () => '0.0' })
  ratio: string;

  @Column('numeric', { name: 'sold_quantity', default: () => '0.0' })
  soldQuantity: string;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;
}
