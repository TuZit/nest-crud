import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_adjustment_detail', ['id'], { unique: true })
@Entity('moq_adjustment_detail', { schema: 'public' })
export class MoqAdjustmentDetail {
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

  @Column('text', { name: 'moq_adjustment_id', nullable: true })
  moqAdjustmentId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_sku', nullable: true })
  variantSku: string | null;

  @Column('integer', { name: 'inventory_balance_adjustment_quantity' })
  inventoryBalanceAdjustmentQuantity: number;

  @Column('integer', {
    name: 'moq_balance_adjustment_quantity',
    nullable: true
  })
  moqBalanceAdjustmentQuantity: number | null;
}
