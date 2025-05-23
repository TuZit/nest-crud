import { Column, Entity } from 'typeorm';

@Entity('po_risk_history_bao', { schema: 'public' })
export class PoRiskHistoryBao {
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

  @Column('text', { name: 'po_id', nullable: true })
  poId: string | null;

  @Column('text', { name: 'po_name', nullable: true })
  poName: string | null;

  @Column('timestamp without time zone', {
    name: 'po_created_at',
    nullable: true
  })
  poCreatedAt: Date | null;

  @Column('text', { name: 'do_name', nullable: true })
  doName: string | null;

  @Column('timestamp without time zone', {
    name: 'do_processing_date',
    nullable: true
  })
  doProcessingDate: Date | null;

  @Column('text', { name: 'event_group', nullable: true })
  eventGroup: string | null;

  @Column('text', { name: 'event_type', nullable: true })
  eventType: string | null;

  @Column('timestamp without time zone', { name: 'event_date', nullable: true })
  eventDate: Date | null;

  @Column('numeric', { name: 'event_value', nullable: true })
  eventValue: string | null;

  @Column('text', { name: 'transaction_id', nullable: true })
  transactionId: string | null;

  @Column('text', { name: 'gateway_id', nullable: true })
  gatewayId: string | null;

  @Column('text', { name: 'dispute_outcome', nullable: true })
  disputeOutcome: string | null;

  @Column('text', { name: 'dispute_reason', nullable: true })
  disputeReason: string | null;

  @Column('text', { name: 'supplier_risk', nullable: true })
  supplierRisk: string | null;

  @Column('text', { name: 'root_cause', nullable: true })
  rootCause: string | null;

  @Column('text', { name: 'root_cause_type', nullable: true })
  rootCauseType: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('integer', { name: 'risk_age', nullable: true })
  riskAge: number | null;

  @Column('text', { name: 'risk_age_group', nullable: true })
  riskAgeGroup: string | null;

  @Column('text', { name: 'do_id', nullable: true })
  doId: string | null;

  @Column('text', { name: 'related_id', nullable: true })
  relatedId: string | null;

  @Column('text', { name: 'dispute_id', nullable: true })
  disputeId: string | null;

  @Column('text', { name: 'refund_id', nullable: true })
  refundId: string | null;

  @Column('text', { name: 'event_id', nullable: true })
  eventId: string | null;

  @Column('text', { name: 'event_code', nullable: true })
  eventCode: string | null;
}
