import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Payout } from './Payout';

@Index('PK_payout_history', ['id'], { unique: true })
@Index('IX_payout_history_payout_id', ['payoutId'], {})
@Entity('payout_history', { schema: 'public' })
export class PayoutHistory {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'payout_id', nullable: true })
  payoutId: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'method' })
  method: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('double precision', {
    name: 'processing_amount',
    precision: 53,
    default: () => '0.0'
  })
  processingAmount: number;

  @Column('double precision', {
    name: 'reject_amount',
    precision: 53,
    default: () => '0.0'
  })
  rejectAmount: number;

  @Column('double precision', {
    name: 'success_amount',
    precision: 53,
    default: () => '0.0'
  })
  successAmount: number;

  @ManyToOne(() => Payout, (payout) => payout.payoutHistories, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'payout_id', referencedColumnName: 'id' }])
  payout: Payout;
}
