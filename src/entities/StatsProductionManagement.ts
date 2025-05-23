import { Column, Entity, Index } from 'typeorm';

@Index('PK_stats_production_management', ['id'], { unique: true })
@Entity('stats_production_management', { schema: 'public' })
export class StatsProductionManagement {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'moq_request_id', nullable: true })
  moqRequestId: string | null;

  @Column('text', { name: 'moq_request_status', nullable: true })
  moqRequestStatus: string | null;

  @Column('text', { name: 'sale_request_status', nullable: true })
  saleRequestStatus: string | null;

  @Column('integer', { name: 'quantity', nullable: true })
  quantity: number | null;

  @Column('integer', { name: 'arrived', nullable: true })
  arrived: number | null;

  @Column('jsonb', { name: 'arrival_history', nullable: true })
  arrivalHistory: object | null;

  @Column('text', { name: 'lead_time', nullable: true })
  leadTime: string | null;

  @Column('text', { name: 'sale_request_id', nullable: true })
  saleRequestId: string | null;

  @Column('text', { name: 'sale_request_code', nullable: true })
  saleRequestCode: string | null;

  @Column('timestamp without time zone', {
    name: 'sale_request_created',
    nullable: true
  })
  saleRequestCreated: Date | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'merchandiser_email', nullable: true })
  merchandiserEmail: string | null;

  @Column('text', { name: 'product_status', nullable: true })
  productStatus: string | null;

  @Column('boolean', { name: 'is_fc', nullable: true })
  isFc: boolean | null;

  @Column('boolean', { name: 'is_off_fc', nullable: true })
  isOffFc: boolean | null;

  @Column('text', { name: 'moq_request_code', nullable: true })
  moqRequestCode: string | null;

  @Column('timestamp without time zone', {
    name: 'moq_request_created',
    nullable: true
  })
  moqRequestCreated: Date | null;

  @Column('timestamp without time zone', {
    name: 'moq_request_updated',
    nullable: true
  })
  moqRequestUpdated: Date | null;

  @Column('timestamp without time zone', {
    name: 'start_production',
    nullable: true
  })
  startProduction: Date | null;

  @Column('timestamp without time zone', {
    name: 'estimate_last_arrival',
    nullable: true
  })
  estimateLastArrival: Date | null;

  @Column('timestamp without time zone', {
    name: 'fulfillment_date',
    nullable: true
  })
  fulfillmentDate: Date | null;

  @Column('text', { name: 'fulfillment_email', nullable: true })
  fulfillmentEmail: string | null;

  @Column('timestamp without time zone', {
    name: 'estimate_first_arrival',
    nullable: true
  })
  estimateFirstArrival: Date | null;

  @Column('boolean', { name: 'is_active_fc', nullable: true })
  isActiveFc: boolean | null;

  @Column('text', { name: 'sup_code', nullable: true })
  supCode: string | null;

  @Column('text', { name: 'sup_id', nullable: true })
  supId: string | null;

  @Column('integer', { name: 'arrival_plan', nullable: true })
  arrivalPlan: number | null;

  @Column('timestamp without time zone', {
    name: 'completed_date',
    nullable: true
  })
  completedDate: Date | null;

  @Column('jsonb', { name: 'content_owner_email', nullable: true })
  contentOwnerEmail: object | null;

  @Column('text', { name: 'note', nullable: true })
  note: string | null;
}
