import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_reconcile_history', ['id'], { unique: true })
@Entity('moq_reconcile_history', { schema: 'public' })
export class MoqReconcileHistory {
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

  @Column('text', { name: 'moq_request_id', nullable: true })
  moqRequestId: string | null;

  @Column('text', { name: 'moq_request_code', nullable: true })
  moqRequestCode: string | null;

  @Column('text', { name: 'reconcile_status' })
  reconcileStatus: string;

  @Column('text', { name: 'version_code', nullable: true })
  versionCode: string | null;

  @Column('jsonb', { name: 'account', nullable: true })
  account: object | null;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;
}
