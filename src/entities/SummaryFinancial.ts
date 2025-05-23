import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Supplier } from './Supplier';

@Index('PK_summary_financial', ['id'], { unique: true })
@Index('IX_summary_financial_supplier_id', ['supplierId'], {})
@Entity('summary_financial', { schema: 'public' })
export class SummaryFinancial {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('timestamp without time zone', { name: 'date', nullable: true })
  date: Date | null;

  @Column('double precision', { name: 'balance', precision: 53 })
  balance: number;

  @Column('double precision', {
    name: 'sls',
    precision: 53,
    default: () => '0.0'
  })
  sls: number;

  @Column('double precision', {
    name: 'total_payout',
    precision: 53,
    default: () => '0.0'
  })
  totalPayout: number;

  @Column('double precision', {
    name: 'total_payout_processing',
    precision: 53,
    default: () => '0.0'
  })
  totalPayoutProcessing: number;

  @Column('double precision', {
    name: 'escrow',
    precision: 53,
    default: () => '0.0'
  })
  escrow: number;

  @Column('double precision', {
    name: 'release',
    precision: 53,
    default: () => '0.0'
  })
  release: number;

  // @ManyToOne(() => Supplier, (supplier) => supplier.summaryFinancials, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
