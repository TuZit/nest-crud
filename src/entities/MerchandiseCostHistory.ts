import { Column, Entity, Index } from 'typeorm';

@Index('PK_merchandise_cost_history', ['id'], { unique: true })
@Entity('merchandise_cost_history', { schema: 'public' })
export class MerchandiseCostHistory {
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

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'fulfillment_version_id', nullable: true })
  fulfillmentVersionId: string | null;

  @Column('integer', { name: 'version' })
  version: number;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'updated_by_email', nullable: true })
  updatedByEmail: string | null;
}
