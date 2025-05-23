import { Column, Entity, Index } from 'typeorm';

@Index('PK_notification', ['id'], { unique: true })
@Entity('notification', { schema: 'public' })
export class Notification {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'tn_id', nullable: true })
  tnId: string | null;

  @Column('jsonb', { name: 'data', nullable: true })
  data: object | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'account', nullable: true })
  account: string | null;

  @Column('text', { name: 'subject', nullable: true })
  subject: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'sent_to', default: () => "''" })
  sentTo: string;
}
