import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Do } from './Do';

@Index('IX_po_risk_history_do_id', ['doId'], {})
@Index('PK_po_risk_history', ['id'], { unique: true })
@Index('po_risk_history_event_date_supplier_risk_index', ['supplierRisk'], {})
@Entity('po_risk_history', { schema: 'public' })
export class PoRiskHistory {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'po_id', nullable: true })
  poId: string | null;

  @Column('text', { name: 'po_name', nullable: true })
  poName: string | null;

  @Column('timestamp without time zone', { name: 'po_created_at', nullable: true })
  poCreatedAt: Date | null;

  @Column('text', { name: 'do_name', nullable: true })
  doName: string | null;

  @Column('timestamp without time zone', { name: 'do_processing_date', nullable: true })
  doProcessingDate: Date | null;

  @Column('text', { name: 'event_group', nullable: true })
  eventGroup: string | null;

  @Column('text', { name: 'event_type', nullable: true })
  eventType: string | null;

  @Column('timestamp without time zone', { name: 'event_date', nullable: true })
  eventDate: Date | null;

  @Column('double precision', { name: 'event_value', precision: 53 })
  eventValue: number;

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

  @Column('text', { name: 'do_id', nullable: true })
  doId: string | null;

  @Column('timestamp without time zone', { name: 'created', default: () => "'0001-01-01 00:00:00'" })
  created: Date;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('integer', { name: 'risk_age', default: () => '0' })
  riskAge: number;

  @Column('text', { name: 'risk_age_group', nullable: true })
  riskAgeGroup: string | null;

  @Column('timestamp without time zone', { name: 'updated', default: () => "'0001-01-01 00:00:00'" })
  updated: Date;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'related_id', nullable: true })
  relatedId: string | null;

  // @ManyToOne(()=>Do,do=>do.poRiskHistories,{ onDelete:"RESTRICT" })
  @JoinColumn([{ name: 'do_id', referencedColumnName: 'id' }])
  do: Do;
}
