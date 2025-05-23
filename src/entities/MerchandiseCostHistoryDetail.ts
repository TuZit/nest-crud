import { Column, Entity, Index } from 'typeorm';

@Index('PK_merchandise_cost_history_detail', ['id'], { unique: true })
@Entity('merchandise_cost_history_detail', { schema: 'public' })
export class MerchandiseCostHistoryDetail {
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

  @Column('text', { name: 'merchandise_cost_history_id', nullable: true })
  merchandiseCostHistoryId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('double precision', {
    name: 'merchandise_cost',
    nullable: true,
    precision: 53
  })
  merchandiseCost: number | null;

  @Column('text', { name: 'variant_name', nullable: true })
  variantName: string | null;

  @Column('text', { name: 'variant_code', nullable: true })
  variantCode: string | null;

  @Column('integer', { name: 'weight', nullable: true })
  weight: number | null;
}
