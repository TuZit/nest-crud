import { Column, Entity, Index } from 'typeorm';

@Index('ix_po_risk_history_2_do_id', ['doId'], {})
@Index('po_risk_history_2_supplier_risk2_idx', ['doId', 'eventValue', 'supplierRisk'], {})
@Index('po_risk_history_2_event_date_index', ['eventDate'], {})
@Index('idx_event_group_filtered', ['eventGroup'], {})
@Index('idx_event_group_not_null', ['eventGroup'], {})
@Index('idx_event_group_partial', ['eventGroup'], {})
@Index('idx_po_risk_history_2_event_group', ['eventGroup'], {})
@Index('idx_po_risk_history_2_event_type', ['eventType'], {})
@Index('PK_po_risk_history_2', ['id'], { unique: true })
@Index('ix_po_risk_history_2_po_id', ['poId'], {})
@Index('po_risk_history_2_po_name', ['poName'], {})
@Index('idx_related_id', ['relatedId'], {})
@Index('po_risk_history_2_supplier_risk_index', ['supplierRisk'], {})
@Index('ix_po_risk_history_2_transaction_id', ['transactionId'], {})
@Entity('po_risk_history_2', { schema: 'public' })
export class PoRiskHistory_2 {
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
}
