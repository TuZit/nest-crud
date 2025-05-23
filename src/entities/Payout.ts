import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { Supplier } from './Supplier';
import { PayoutHistory } from './PayoutHistory';

@Index('PK_payout', ['id'], { unique: true })
@Index('IX_payout_supplier_id', ['supplierId'], {})
@Entity('payout', { schema: 'public' })
export class Payout {
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

  @Column('text', { name: 'transaction_id', nullable: true })
  transactionId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('double precision', { name: 'amount', precision: 53 })
  amount: number;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'notes', nullable: true })
  notes: string | null;

  @Column('text', { name: 'method', default: () => "''" })
  method: string;

  @Column('text', { name: 'request_type', nullable: true })
  requestType: string | null;

  // @ManyToOne(() => Supplier, (supplier) => supplier.payouts, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @OneToMany(() => PayoutHistory, (payoutHistory) => payoutHistory.payout)
  payoutHistories: PayoutHistory[];
}
