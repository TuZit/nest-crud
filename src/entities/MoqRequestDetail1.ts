import { Column, Entity } from 'typeorm';

@Entity('moq_request_detail1', { schema: 'public' })
export class MoqRequestDetail1 {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'moq_request_id', nullable: true })
  moqRequestId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_sku', nullable: true })
  variantSku: string | null;

  @Column('integer', { name: 'quantity', nullable: true })
  quantity: number | null;

  @Column('integer', { name: 'arrived_quantity', nullable: true })
  arrivedQuantity: number | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('numeric', { name: 'merchandise_cost', nullable: true })
  merchandiseCost: string | null;

  @Column('integer', { name: 'reconcile_quantity', nullable: true })
  reconcileQuantity: number | null;

  @Column('timestamp without time zone', {
    name: 'deactive_fc_at',
    nullable: true
  })
  deactiveFcAt: Date | null;

  @Column('boolean', { name: 'is_fake_contract', nullable: true })
  isFakeContract: boolean | null;

  @Column('boolean', { name: 'is_off_fc', nullable: true })
  isOffFc: boolean | null;

  @Column('timestamp without time zone', { name: 'off_fc', nullable: true })
  offFc: Date | null;
}
