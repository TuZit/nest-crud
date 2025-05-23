import { Column, Entity, Index } from 'typeorm';

@Index('pk_ds_freshdesk_ticket_history', ['groupId', 'ticketId'], {
  unique: true
})
@Entity('ds_freshdesk_ticket_history', { schema: 'public' })
export class DsFreshdeskTicketHistory {
  @Column('text', { primary: true, name: 'ticket_id' })
  ticketId: string;

  @Column('text', { primary: true, name: 'group_id' })
  groupId: string;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;
}
