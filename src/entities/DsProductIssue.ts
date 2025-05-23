import { Column, Entity, Index } from 'typeorm';

@Index('PK_ds_product_issue', ['id', 'ticketCreatedAt'], { unique: true })
@Entity('ds_product_issue', { schema: 'public' })
export class DsProductIssue {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'ticket_id', nullable: true })
  ticketId: string | null;

  @Column('text', { name: 'do_id', nullable: true })
  doId: string | null;

  @Column('text', { name: 'fd_ticket_id', nullable: true })
  fdTicketId: string | null;

  @Column('timestamp without time zone', {
    primary: true,
    name: 'ticket_created_at'
  })
  ticketCreatedAt: Date;

  @Column('timestamp without time zone', {
    name: 'ticket_updated_at',
    nullable: true
  })
  ticketUpdatedAt: Date | null;

  @Column('text', { name: 'ticket_status', nullable: true })
  ticketStatus: string | null;

  @Column('text', { name: 'ticket_level_in', nullable: true })
  ticketLevelIn: string | null;

  @Column('text', { name: 'ticket_customer_request', nullable: true })
  ticketCustomerRequest: string | null;

  @Column('text', { name: 'ticket_level_out', nullable: true })
  ticketLevelOut: string | null;

  @Column('text', { name: 'ticket_customer_feedback', nullable: true })
  ticketCustomerFeedback: string | null;

  @Column('text', { name: 'ticket_rootcause', nullable: true })
  ticketRootcause: string | null;

  @Column('text', { name: 'ticket_source', nullable: true })
  ticketSource: string | null;

  @Column('text', { name: 'ticket_special_flow', nullable: true })
  ticketSpecialFlow: string | null;

  @Column('text', { name: 'cf_rootcause', nullable: true })
  cfRootcause: string | null;

  @Column('text', { name: 'ticket_customer_email', nullable: true })
  ticketCustomerEmail: string | null;

  @Column('text', { name: 'dispute_id', nullable: true })
  disputeId: string | null;

  @Column('text', { name: 'fd_group_name', nullable: true })
  fdGroupName: string | null;

  @Column('text', { name: 'po_id', nullable: true })
  poId: string | null;

  @Column('timestamp without time zone', {
    name: 'ticket_resolved_at',
    nullable: true
  })
  ticketResolvedAt: Date | null;

  @Column('text', { name: 'customer_feedback', nullable: true })
  customerFeedback: string | null;

  @Column('text', { name: 'customer_feedback_issue', nullable: true })
  customerFeedbackIssue: string | null;

  @Column('timestamp without time zone', {
    name: 'do_created_at',
    nullable: true
  })
  doCreatedAt: Date | null;

  @Column('timestamp without time zone', { name: 'do_updated', nullable: true })
  doUpdated: Date | null;

  @Column('text', { name: 'do_code', nullable: true })
  doCode: string | null;

  @Column('text', { name: 'do_status', nullable: true })
  doStatus: string | null;

  @Column('numeric', { name: 'product_cost', nullable: true })
  productCost: string | null;

  @Column('numeric', { name: 'shipping_cost', nullable: true })
  shippingCost: string | null;

  @Column('numeric', { name: 'packing_cost', nullable: true })
  packingCost: string | null;

  @Column('text', { name: 'supplier_type', nullable: true })
  supplierType: string | null;

  @Column('text', { name: 'variant_properties', nullable: true })
  variantProperties: string | null;

  @Column('text', { name: 'size', nullable: true })
  size: string | null;

  @Column('text', { name: 'color', nullable: true })
  color: string | null;

  @Column('text', { name: 'attribute1', nullable: true })
  attribute1: string | null;

  @Column('text', { name: 'attribute2', nullable: true })
  attribute2: string | null;

  @Column('text', { name: 'attribute3', nullable: true })
  attribute3: string | null;

  @Column('text', { name: 'contract_type', nullable: true })
  contractType: string | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_cancelled',
    nullable: true
  })
  doStatusDateCancelled: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_closed',
    nullable: true
  })
  doStatusDateClosed: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_completed',
    nullable: true
  })
  doStatusDateCompleted: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_delivered',
    nullable: true
  })
  doStatusDateDelivered: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_failed',
    nullable: true
  })
  doStatusDateFailed: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_inus',
    nullable: true
  })
  doStatusDateInus: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_pending',
    nullable: true
  })
  doStatusDatePending: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_processing',
    nullable: true
  })
  doStatusDateProcessing: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_ta',
    nullable: true
  })
  doStatusDateTa: Date | null;

  @Column('timestamp without time zone', {
    name: 'do_status_date_to',
    nullable: true
  })
  doStatusDateTo: Date | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'supplier_name', nullable: true })
  supplierName: string | null;

  @Column('text', { name: 'po_code', nullable: true })
  poCode: string | null;

  @Column('timestamp without time zone', { name: 'po_created', nullable: true })
  poCreated: Date | null;

  @Column('timestamp without time zone', {
    name: 'po_payment_paid',
    nullable: true
  })
  poPaymentPaid: Date | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_label', nullable: true })
  productLabel: string | null;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'product_family', nullable: true })
  productFamily: string | null;

  @Column('text', { name: 'transaction_id', nullable: true })
  transactionId: string | null;

  @Column('text', { name: 'transaction_gateway_provider', nullable: true })
  transactionGatewayProvider: string | null;

  @Column('text', { name: 'po_shipping_email', nullable: true })
  poShippingEmail: string | null;

  @Column('text', { name: 'po_first_name', nullable: true })
  poFirstName: string | null;

  @Column('text', { name: 'po_last_name', nullable: true })
  poLastName: string | null;

  @Column('text', { name: 'payment_account', nullable: true })
  paymentAccount: string | null;

  @Column('text', { name: 'domain', nullable: true })
  domain: string | null;

  @Column('text', { name: 'cs_usual_bra_size', nullable: true })
  csUsualBraSize: string | null;

  @Column('text', { name: 'cs_underbust_measurement', nullable: true })
  csUnderbustMeasurement: string | null;

  @Column('text', { name: 'cs_usual_dress_size', nullable: true })
  csUsualDressSize: string | null;

  @Column('text', { name: 'cs_bust_measurement', nullable: true })
  csBustMeasurement: string | null;

  @Column('text', { name: 'cs_waist_measurement', nullable: true })
  csWaistMeasurement: string | null;

  @Column('text', { name: 'cs_hip_measurement', nullable: true })
  csHipMeasurement: string | null;

  @Column('text', { name: 'cs_usual_pants_size', nullable: true })
  csUsualPantsSize: string | null;

  @Column('text', { name: 'cs_height', nullable: true })
  csHeight: string | null;

  @Column('text', { name: 'cs_usual_tshirt_size', nullable: true })
  csUsualTshirtSize: string | null;

  @Column('text', { name: 'cs_chest_measurement', nullable: true })
  csChestMeasurement: string | null;

  @Column('text', { name: 'cs_shoulder_measurement', nullable: true })
  csShoulderMeasurement: string | null;

  @Column('text', { name: 'cf_sizing_additional1', nullable: true })
  cfSizingAdditional1: string | null;

  @Column('text', { name: 'cf_sizing_additional2', nullable: true })
  cfSizingAdditional2: string | null;

  @Column('text', { name: 'cf_sizing_additional3', nullable: true })
  cfSizingAdditional3: string | null;

  @Column('text', { name: 'cf_sizing_additional4', nullable: true })
  cfSizingAdditional4: string | null;

  @Column('text', { name: 'cf_sizing_additional5', nullable: true })
  cfSizingAdditional5: string | null;

  @Column('text', { name: 'cf_sizing_additional6', nullable: true })
  cfSizingAdditional6: string | null;

  @Column('text', { name: 'cf_sizing_additional7', nullable: true })
  cfSizingAdditional7: string | null;

  @Column('text', { name: 'cf_sizing_additional8', nullable: true })
  cfSizingAdditional8: string | null;

  @Column('boolean', { name: 'cf_sizing_issue1', nullable: true })
  cfSizingIssue1: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue2', nullable: true })
  cfSizingIssue2: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue3', nullable: true })
  cfSizingIssue3: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue4', nullable: true })
  cfSizingIssue4: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue5', nullable: true })
  cfSizingIssue5: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue6', nullable: true })
  cfSizingIssue6: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue7', nullable: true })
  cfSizingIssue7: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue8', nullable: true })
  cfSizingIssue8: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue9', nullable: true })
  cfSizingIssue9: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue10', nullable: true })
  cfSizingIssue10: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue11', nullable: true })
  cfSizingIssue11: boolean | null;

  @Column('boolean', { name: 'cf_sizing_issue12', nullable: true })
  cfSizingIssue12: boolean | null;

  @Column('double precision', {
    name: 'csat_score',
    nullable: true,
    precision: 53
  })
  csatScore: number | null;

  @Column('boolean', { name: 'is_deleted', nullable: true })
  isDeleted: boolean | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'additional_feedback', nullable: true })
  additionalFeedback: string | null;

  @Column('text', { name: 'additional_feedback_issue', nullable: true })
  additionalFeedbackIssue: string | null;
}
