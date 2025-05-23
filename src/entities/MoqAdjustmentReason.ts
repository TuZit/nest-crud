import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_adjustment_reason', ['id'], { unique: true })
@Entity('moq_adjustment_reason', { schema: 'public' })
export class MoqAdjustmentReason {
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

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'moq_balance_operator' })
  moqBalanceOperator: string;

  @Column('text', { name: 'inventory_balance_operator' })
  inventoryBalanceOperator: string;

  @Column('text', { name: 'moq_balance_3PL_operator' })
  moqBalance_3PlOperator: string;

  @Column('text', { name: 'inventory_balance_3PL_operator' })
  inventoryBalance_3PlOperator: string;
}
