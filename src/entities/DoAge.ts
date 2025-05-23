import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Do } from './Do';

@Index('do_age_age_index', ['age'], {})
@Index('PK_do_age', ['doId'], { unique: true })
@Index('do_age_processing_at_index', ['processingAt'], {})
@Index('do_age_status_index', ['status'], {})
@Index('do_age_supplier_id_index', ['supplierId'], {})
@Entity('do_age', { schema: 'public' })
export class DoAge {
  @Column('text', { primary: true, name: 'do_id' })
  doId: string;

  @Column('integer', { name: 'age' })
  age: number;

  @Column('integer', { name: 'processing_age', nullable: true })
  processingAge: number | null;

  @Column('integer', { name: 'ta_age', nullable: true })
  taAge: number | null;

  @Column('integer', { name: 'to_age', nullable: true })
  toAge: number | null;

  @Column('integer', { name: 'inus_age', nullable: true })
  inusAge: number | null;

  @Column('integer', { name: 'last_log_age', nullable: true })
  lastLogAge: number | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('timestamp without time zone', { name: 'report_time', nullable: true })
  reportTime: Date | null;

  @Column('integer', { name: 'canceled_age', nullable: true })
  canceledAge: number | null;

  @Column('integer', { name: 'closed_age', nullable: true })
  closedAge: number | null;

  @Column('integer', { name: 'closed_issue_age', nullable: true })
  closedIssueAge: number | null;

  @Column('integer', { name: 'delived_age', nullable: true })
  delivedAge: number | null;

  @Column('integer', { name: 'new_age', nullable: true })
  newAge: number | null;

  @Column('boolean', { name: 'warning', default: () => 'false' })
  warning: boolean;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('timestamp without time zone', { name: 'processing_at', nullable: true })
  processingAt: Date | null;

  @Column('boolean', { name: 'is_exception', default: () => 'false' })
  isException: boolean;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  // @OneToOne(()=>Do,do=>do.doAge,{ onDelete:"CASCADE" })
  @JoinColumn([{ name: 'do_id', referencedColumnName: 'id' }])
  do: Do;
}
