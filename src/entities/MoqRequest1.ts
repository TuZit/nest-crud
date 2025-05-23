import { Column, Entity } from 'typeorm';

@Entity('moq_request1', { schema: 'public' })
export class MoqRequest1 {
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'moq_sale_request_id', nullable: true })
  moqSaleRequestId: string | null;

  @Column('text', { name: 'moq_sale_request_code', nullable: true })
  moqSaleRequestCode: string | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'factory_code', nullable: true })
  factoryCode: string | null;

  @Column('integer', { name: 'estimate_quantity', nullable: true })
  estimateQuantity: number | null;

  @Column('integer', { name: 'actual_quantity', nullable: true })
  actualQuantity: number | null;

  @Column('numeric', { name: 'total_value', nullable: true })
  totalValue: string | null;

  @Column('integer', { name: 'total_variant', nullable: true })
  totalVariant: number | null;

  @Column('text', { name: 'moq_requirement_id', nullable: true })
  moqRequirementId: string | null;

  @Column('jsonb', { name: 'moq_requirement', nullable: true })
  moqRequirement: object | null;

  @Column('timestamp without time zone', {
    name: 'actual_completed_date_variant',
    nullable: true
  })
  actualCompletedDateVariant: Date | null;

  @Column('timestamp without time zone', {
    name: 'actual_first_date_variant',
    nullable: true
  })
  actualFirstDateVariant: Date | null;

  @Column('timestamp without time zone', {
    name: 'estimate_completed_date_variant',
    nullable: true
  })
  estimateCompletedDateVariant: Date | null;

  @Column('timestamp without time zone', {
    name: 'estimate_first_date_variant',
    nullable: true
  })
  estimateFirstDateVariant: Date | null;

  @Column('text', { name: 'supplier_name', nullable: true })
  supplierName: string | null;

  @Column('timestamp without time zone', {
    name: 'cancelled_at',
    nullable: true
  })
  cancelledAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'completed_at',
    nullable: true
  })
  completedAt: Date | null;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('integer', { name: 'reconcile_quantity', nullable: true })
  reconcileQuantity: number | null;

  @Column('numeric', { name: 'total_value_reconcile', nullable: true })
  totalValueReconcile: string | null;

  @Column('timestamp without time zone', {
    name: 'confirmation_date',
    nullable: true
  })
  confirmationDate: Date | null;

  @Column('text', { name: 'note', nullable: true })
  note: string | null;

  @Column('timestamp without time zone', {
    name: 'rejected_at',
    nullable: true
  })
  rejectedAt: Date | null;

  @Column('text', { name: 'rejected_by_email', nullable: true })
  rejectedByEmail: string | null;

  @Column('text', { name: 'rejected_reason', nullable: true })
  rejectedReason: string | null;

  @Column('timestamp without time zone', {
    name: 'updated_info_at',
    nullable: true
  })
  updatedInfoAt: Date | null;

  @Column('text', { name: 'updated_info_by', nullable: true })
  updatedInfoBy: string | null;

  @Column('boolean', { name: 'is_exceeded_moq_sale_request', nullable: true })
  isExceededMoqSaleRequest: boolean | null;

  @Column('numeric', {
    name: 'per_exceeded_sale_request_quantity',
    nullable: true
  })
  perExceededSaleRequestQuantity: string | null;

  @Column('numeric', {
    name: 'per_exceeded_sale_request_value',
    nullable: true
  })
  perExceededSaleRequestValue: string | null;

  @Column('boolean', { name: 'is_fake_contract', nullable: true })
  isFakeContract: boolean | null;

  @Column('timestamp without time zone', { name: 'off_fc', nullable: true })
  offFc: Date | null;

  @Column('timestamp without time zone', {
    name: 'estimate_fulfillment_date',
    nullable: true
  })
  estimateFulfillmentDate: Date | null;

  @Column('text', { name: 'fulfillment_email', nullable: true })
  fulfillmentEmail: string | null;

  @Column('text', { name: 'merchandiser_email', nullable: true })
  merchandiserEmail: string | null;

  @Column('text', { name: 'reconcile_status', nullable: true })
  reconcileStatus: string | null;

  @Column('text', { name: 'reconcile_version_code', nullable: true })
  reconcileVersionCode: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;
}
