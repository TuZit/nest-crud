import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';

@Index('IX_moq_sales_request_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_moq_sales_request', ['id'], { unique: true })
@Entity('moq_sales_request', { schema: 'public' })
export class MoqSalesRequest {
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'reference_product_core_id', nullable: true })
  referenceProductCoreId: string | null;

  @Column('text', { name: 'reference_product_core_label', nullable: true })
  referenceProductCoreLabel: string | null;

  @Column('jsonb', { name: 'product_codes', nullable: true })
  productCodes: object | null;

  @Column('jsonb', { name: 'page_versions', nullable: true })
  pageVersions: object | null;

  @Column('timestamp without time zone', {
    name: 'from_sold_date',
    nullable: true
  })
  fromSoldDate: Date | null;

  @Column('timestamp without time zone', {
    name: 'to_sold_date',
    nullable: true
  })
  toSoldDate: Date | null;

  @Column('integer', { name: 'sale_duration', nullable: true })
  saleDuration: number | null;

  @Column('numeric', { name: 'do_po_ratio', nullable: true })
  doPoRatio: string | null;

  @Column('integer', { name: 'po_per_day', nullable: true })
  poPerDay: number | null;

  @Column('numeric', { name: 'moq_ratio', nullable: true })
  moqRatio: string | null;

  @Column('jsonb', { name: 'sales_plan', nullable: true })
  salesPlan: object | null;

  @Column('text', { name: 'moq_requirement_id', nullable: true })
  moqRequirementId: string | null;

  @Column('jsonb', { name: 'moq_requirement', nullable: true })
  moqRequirement: object | null;

  @Column('numeric', { name: 'merchandise_cost', nullable: true })
  merchandiseCost: string | null;

  @Column('integer', { name: 'total_pieces', nullable: true })
  totalPieces: number | null;

  @Column('numeric', { name: 'cbh', nullable: true })
  cbh: string | null;

  @Column('numeric', { name: 'inventory_cost_remaining', nullable: true })
  inventoryCostRemaining: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'cancel_reason', nullable: true })
  cancelReason: string | null;

  @Column('jsonb', { name: 'status_histories', nullable: true })
  statusHistories: object | null;

  @Column('timestamp without time zone', {
    name: 'request_date',
    nullable: true
  })
  requestDate: Date | null;

  @Column('integer', { name: 'total_variant', nullable: true })
  totalVariant: number | null;

  @Column('timestamp without time zone', {
    name: 'reference_from_sold_date',
    nullable: true
  })
  referenceFromSoldDate: Date | null;

  @Column('jsonb', { name: 'reference_page_versions', nullable: true })
  referencePageVersions: object | null;

  @Column('jsonb', { name: 'reference_product_codes', nullable: true })
  referenceProductCodes: object | null;

  @Column('timestamp without time zone', {
    name: 'reference_to_sold_date',
    nullable: true
  })
  referenceToSoldDate: Date | null;

  @Column('text', { name: 'email', nullable: true })
  email: string | null;

  @Column('boolean', {
    name: 'is_requirement_latest',
    nullable: true,
    default: () => 'true'
  })
  isRequirementLatest: boolean | null;

  @Column('jsonb', { name: 'moq_requirement_simulate', nullable: true })
  moqRequirementSimulate: object | null;

  @Column('jsonb', { name: 'sales_plan_simulate', nullable: true })
  salesPlanSimulate: object | null;

  @Column('boolean', { name: 'is_use_mapping', nullable: true })
  isUseMapping: boolean | null;

  @Column('text', { name: 'fulfill_type', nullable: true })
  fulfillType: string | null;

  @Column('numeric', { name: 'total_value', nullable: true })
  totalValue: string | null;

  @Column('jsonb', { name: 'reference_sold_dates', nullable: true })
  referenceSoldDates: object | null;

  @Column('jsonb', { name: 'sold_dates', nullable: true })
  soldDates: object | null;

  @Column('numeric', { name: 'cbh_rate', nullable: true })
  cbhRate: string | null;

  @Column('numeric', { name: 'cbh_rate_simulate', nullable: true })
  cbhRateSimulate: string | null;

  @Column('numeric', { name: 'cbh_simulate', nullable: true })
  cbhSimulate: string | null;

  @Column('boolean', { name: 'is_fake_contract', nullable: true })
  isFakeContract: boolean | null;

  @Column('timestamp without time zone', { name: 'off_fc', nullable: true })
  offFc: Date | null;

  @Column('text', { name: 'merchandiser_email', nullable: true })
  merchandiserEmail: string | null;

  @Column('timestamp without time zone', {
    name: 'completed_at',
    nullable: true
  })
  completedAt: Date | null;

  @Column('boolean', { name: 'is_first_phase', nullable: true })
  isFirstPhase: boolean | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('jsonb', { name: 'list_sale_variant_version_id', nullable: true })
  listSaleVariantVersionId: object | null;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.moqSalesRequests,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;
}
