import { Column, Entity } from 'typeorm';

@Entity('z_do', { schema: 'public' })
export class ZDo {
  @Column('text', { name: 'id' })
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

  @Column('jsonb', { name: 'shipping_address', nullable: true })
  shippingAddress: object | null;

  @Column('timestamp without time zone', {
    name: 'status_date_pending',
    nullable: true
  })
  statusDatePending: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_processing',
    nullable: true
  })
  statusDateProcessing: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_cancelled',
    nullable: true
  })
  statusDateCancelled: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_to',
    nullable: true
  })
  statusDateTo: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_ta',
    nullable: true
  })
  statusDateTa: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_inus',
    nullable: true
  })
  statusDateInus: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_failed',
    nullable: true
  })
  statusDateFailed: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_delivered',
    nullable: true
  })
  statusDateDelivered: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_completed',
    nullable: true
  })
  statusDateCompleted: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_closed',
    nullable: true
  })
  statusDateClosed: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_last_update',
    nullable: true
  })
  statusDateLastUpdate: Date | null;

  @Column('text', { name: 'origin_action', nullable: true })
  originAction: string | null;

  @Column('integer', { name: 'origin_version' })
  originVersion: number;

  @Column('text', { name: 'origin_do_id', nullable: true })
  originDoId: string | null;

  @Column('text', { name: 'odo_id', nullable: true })
  odoId: string | null;

  @Column('text', { name: 'odo_status', nullable: true })
  odoStatus: string | null;

  @Column('double precision', { name: 'cost', precision: 53 })
  cost: number;

  @Column('double precision', { name: 'escrow', precision: 53 })
  escrow: number;

  @Column('double precision', { name: 'release', precision: 53 })
  release: number;

  @Column('double precision', { name: 'release_incomplete', precision: 53 })
  releaseIncomplete: number;

  @Column('double precision', { name: 'release_canceled', precision: 53 })
  releaseCanceled: number;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'po_id', nullable: true })
  poId: string | null;

  @Column('text', { name: 'po_code', nullable: true })
  poCode: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @Column('text', { name: 'priority' })
  priority: string;

  @Column('text', { name: 'closed_reason', nullable: true })
  closedReason: string | null;

  @Column('text', { name: 'cs_confirm_received', nullable: true })
  csConfirmReceived: string | null;

  @Column('text', { name: 'label', nullable: true })
  label: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'contract_id', nullable: true })
  contractId: string | null;

  @Column('text', { name: 'last_log', nullable: true })
  lastLog: string | null;

  @Column('text', { name: 'selling_page', nullable: true })
  sellingPage: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'term_version_id', nullable: true })
  termVersionId: string | null;

  @Column('timestamp without time zone', {
    name: 'fulfilled_date',
    nullable: true
  })
  fulfilledDate: Date | null;

  @Column('text', { name: 'warning', nullable: true })
  warning: string | null;

  @Column('timestamp without time zone', {
    name: 'last_log_date',
    nullable: true
  })
  lastLogDate: Date | null;

  @Column('text', { name: 'action_reason', nullable: true })
  actionReason: string | null;

  @Column('text', { name: 'shipline', nullable: true })
  shipline: string | null;

  @Column('text', { name: 'closed_policy', nullable: true })
  closedPolicy: string | null;

  @Column('integer', { name: 'version', nullable: true })
  version: number | null;

  @Column('text', { name: 'line_item_id', nullable: true })
  lineItemId: string | null;

  @Column('text', { name: 'contract_quantity_id', nullable: true })
  contractQuantityId: string | null;

  @Column('integer', { name: 'items', nullable: true })
  items: number | null;

  @Column('text', { name: 'publisher_type', nullable: true })
  publisherType: string | null;

  @Column('text', { name: 'supplier_type', nullable: true })
  supplierType: string | null;

  @Column('text', { name: 'contract_type', nullable: true })
  contractType: string | null;

  @Column('text', { name: 'inventory_purchase_detail_id', nullable: true })
  inventoryPurchaseDetailId: string | null;

  @Column('text', { name: 'mixed_price_id', nullable: true })
  mixedPriceId: string | null;

  @Column('text', { name: 'core_variant_id', nullable: true })
  coreVariantId: string | null;

  @Column('double precision', {
    name: 'merchandise_cost_factory',
    nullable: true,
    precision: 53
  })
  merchandiseCostFactory: number | null;

  @Column('text', { name: 'shipping_methods', nullable: true })
  shippingMethods: string | null;

  @Column('text', { name: 'old_core_variant_id', nullable: true })
  oldCoreVariantId: string | null;

  @Column('text', { name: 'dynamic_price_id', nullable: true })
  dynamicPriceId: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;
}
