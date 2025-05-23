import { Column, Entity, Index } from 'typeorm';

@Index('do_status_history_age_index', ['age'], {})
@Index('PK_do_status_history', ['doId', 'status'], { unique: true })
@Index('do_status_history_status_index', ['status'], {})
@Entity('do_status_history', { schema: 'public' })
export class DoStatusHistory {
  @Column('text', { primary: true, name: 'do_id' })
  doId: string;

  @Column('text', { primary: true, name: 'status' })
  status: string;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('integer', { name: 'age' })
  age: number;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('boolean', { name: 'issue', default: () => 'false' })
  issue: boolean;
}
