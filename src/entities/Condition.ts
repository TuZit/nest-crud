import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AgreementHistory } from './AgreementHistory';

@Index('PK_condition', ['id'], { unique: true })
@Entity('condition', { schema: 'public' })
export class Condition {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('timestamp without time zone', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @OneToMany(() => AgreementHistory, (agreementHistory) => agreementHistory.condition)
  agreementHistories: AgreementHistory[];
}
