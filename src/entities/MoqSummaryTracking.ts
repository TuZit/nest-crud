import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_summary_tracking', ['id'], { unique: true })
@Entity('moq_summary_tracking', { schema: 'public' })
export class MoqSummaryTracking {
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

  @Column('text', { name: 'product_label', nullable: true })
  productLabel: string | null;

  @Column('timestamp without time zone', { name: 'time' })
  time: Date;

  @Column('text', { name: 'status' })
  status: string;

  @Column('integer', { name: 'moq_quantity' })
  moqQuantity: number;

  @Column('numeric', { name: 'moq_value' })
  moqValue: string;

  @Column('integer', { name: 'sold_quantity' })
  soldQuantity: number;

  @Column('numeric', { name: 'sold_ratio' })
  soldRatio: string;

  @Column('integer', { name: 'moq_balance_quantity' })
  moqBalanceQuantity: number;

  @Column('numeric', { name: 'moq_balance_value' })
  moqBalanceValue: string;

  @Column('numeric', { name: 'po_per_day' })
  poPerDay: string;
}
