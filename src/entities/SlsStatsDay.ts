import { Column, Entity, Index } from 'typeorm';

@Index('PK_sls_stats_day', ['id'], { unique: true })
@Entity('sls_stats_day', { schema: 'public' })
export class SlsStatsDay {
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

  @Column('timestamp without time zone', { name: 'date' })
  date: Date;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'supplier_type', nullable: true })
  supplierType: string | null;

  @Column('double precision', { name: 'total_loss', precision: 53 })
  totalLoss: number;

  @Column('double precision', { name: 'merchandise_cost', precision: 53 })
  merchandiseCost: number;

  @Column('double precision', { name: 'fulfillment_cost', precision: 53 })
  fulfillmentCost: number;
}
