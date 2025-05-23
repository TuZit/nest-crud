import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Contract } from './Contract';
import { ContractQuantity } from './ContractQuantity';
import { ContractVersion } from './ContractVersion';
import { Variant } from './Variant';
import { Factory } from './Factory';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { InventoryPurchaseDetail } from './InventoryPurchaseDetail';
import { MixedPrice } from './MixedPrice';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';
import { DoAge } from './DoAge';
import { DoParcel } from './DoParcel';
import { PoRiskHistory } from './PoRiskHistory';

@Index('do_supplier_id_status', ['closedReason', 'status', 'supplierId'], {})
@Index('idx_do_code', ['code'], {})
@Index('IX_do_contract_id', ['contractId'], {})
@Index('IX_do_contract_quantity_id', ['contractQuantityId'], {})
@Index('IX_do_contract_version_id', ['contractVersionId'], {})
@Index('IX_do_core_variant_id', ['coreVariantId'], {})
@Index('IX_do_factory_id', ['factoryId'], {})
@Index('IX_do_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('do_supplier_id_search_idx', ['id', 'supplierId'], {})
@Index('PK_do', ['id'], { unique: true })
@Index('IX_do_inventory_purchase_detail_id', ['inventoryPurchaseDetailId'], {})
@Index('IX_do_mixed_price_id', ['mixedPriceId'], {})
@Index('IX_do_origin_do_id', ['originDoId'], {})
@Index('IX_do_origin_fulfillment_variant_version_id', ['originFulfillmentVariantVersionId'], {})
@Index('do_po_code_idx', ['poCode'], {})
@Index('IX_do_po_id_index', ['poId'], {})
@Index('IX_do_product_id', ['productId'], {})
@Index('idx_do_status', ['status'], {})
@Index('idx_status_date_processing', ['statusDateProcessing'], {})
@Index('idx_do_supplier_date', ['statusDateProcessing', 'supplierId'], {})
@Index('IX_do_supplier_id', ['supplierId'], {})
@Index('IX_do_term_version_id', ['termVersionId'], {})
@Index('IX_do_variant_id', ['variantId'], {})
@Entity('do', { schema: 'public' })
export class Do {
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

  @Column('jsonb', { name: 'shipping_address', nullable: true })
  shippingAddress: object | null;

  @Column('double precision', { name: 'cost', precision: 53 })
  cost: number;

  @Column('double precision', { name: 'escrow', precision: 53 })
  escrow: number;

  @Column('double precision', { name: 'release', precision: 53 })
  release: number;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'contract_id', nullable: true })
  contractId: string | null;

  @Column('text', { name: 'origin_action', nullable: true })
  originAction: string | null;

  @Column('text', { name: 'origin_do_id', nullable: true })
  originDoId: string | null;

  @Column('integer', { name: 'origin_version', default: () => '0' })
  originVersion: number;

  @Column('timestamp without time zone', {
    name: 'status_date_cancelled',
    nullable: true
  })
  statusDateCancelled: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_closed',
    nullable: true
  })
  statusDateClosed: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_completed',
    nullable: true
  })
  statusDateCompleted: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_delivered',
    nullable: true
  })
  statusDateDelivered: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_failed',
    nullable: true
  })
  statusDateFailed: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_inus',
    nullable: true
  })
  statusDateInus: Date | null;

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
    name: 'status_date_ta',
    nullable: true
  })
  statusDateTa: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_to',
    nullable: true
  })
  statusDateTo: Date | null;

  @Column('text', { name: 'closed_reason', nullable: true })
  closedReason: string | null;

  @Column('timestamp without time zone', {
    name: 'status_date_last_update',
    nullable: true
  })
  statusDateLastUpdate: Date | null;

  @Column('double precision', { name: 'release_canceled', precision: 53 })
  releaseCanceled: number;

  @Column('double precision', { name: 'release_incomplete', precision: 53 })
  releaseIncomplete: number;

  @Column('text', { name: 'cs_confirm_received', nullable: true })
  csConfirmReceived: string | null;

  @Column('text', { name: 'priority', default: () => "''" })
  priority: string;

  @Column('text', { name: 'label', nullable: true })
  label: string | null;

  @Column('text', { name: 'po_code', nullable: true })
  poCode: string | null;

  @Column('text', { name: 'po_id', nullable: true })
  poId: string | null;

  @Column('integer', { name: 'quantity', default: () => '0' })
  quantity: number;

  @Column('text', { name: 'odo_id', nullable: true })
  odoId: string | null;

  @Column('text', { name: 'odo_status', nullable: true })
  odoStatus: string | null;

  @Column('text', { name: 'last_log', nullable: true })
  lastLog: string | null;

  @Column('text', { name: 'selling_page', nullable: true })
  sellingPage: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('text', { name: 'term_version_id', nullable: true })
  termVersionId: string | null;

  @Column('text', { name: 'release_status', default: () => "''" })
  releaseStatus: string;

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

  @Column('double precision', {
    name: 'packing_cost',
    precision: 53,
    default: () => '0.0'
  })
  packingCost: number;

  @Column('double precision', {
    name: 'product_cost',
    precision: 53,
    default: () => '0.0'
  })
  productCost: number;

  @Column('double precision', {
    name: 'shipping_cost',
    precision: 53,
    default: () => '0.0'
  })
  shippingCost: number;

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

  @Column('jsonb', { name: 'variant', nullable: true })
  variant: object | null;

  @Column('jsonb', { name: 'product', nullable: true })
  product: object | null;

  @Column('text', { name: 'dynamic_price_id', nullable: true })
  dynamicPriceId: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('boolean', { name: 'is_cs_request_ffm_variant', nullable: true })
  isCsRequestFfmVariant: boolean | null;

  @Column('text', { name: 'cs_request_ffm_variant_version_id', nullable: true })
  csRequestFfmVariantVersionId: string | null;

  @Column('text', {
    name: 'origin_fulfillment_variant_version_id',
    nullable: true
  })
  originFulfillmentVariantVersionId: string | null;

  @Column('boolean', { name: 'is_crossian_shipping_line', nullable: true })
  isCrossianShippingLine: boolean | null;

  @ManyToOne(() => Contract, (contract) => contract.dos, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'contract_id', referencedColumnName: 'id' }])
  contract: Contract;

  // @ManyToOne(() => ContractQuantity, (contractQuantity) => contractQuantity.dos, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_quantity_id', referencedColumnName: 'id' }])
  contractQuantity: ContractQuantity;

  // @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  // @ManyToOne(() => Variant, (variant) => variant.dos, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'core_variant_id', referencedColumnName: 'id' }])
  coreVariant: Variant;

  // @ManyToOne(() => Factory, (factory) => factory.dos, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  // @ManyToOne(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  // @ManyToOne(() => InventoryPurchaseDetail, (inventoryPurchaseDetail) => inventoryPurchaseDetail.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'inventory_purchase_detail_id', referencedColumnName: 'id' }])
  inventoryPurchaseDetail: InventoryPurchaseDetail;

  // @ManyToOne(() => MixedPrice, (mixedPrice) => mixedPrice.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'mixed_price_id', referencedColumnName: 'id' }])
  mixedPrice: MixedPrice;

  // @ManyToOne(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.dos2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([
    {
      name: 'origin_fulfillment_variant_version_id',
      referencedColumnName: 'id'
    }
  ])
  originFulfillmentVariantVersion: FulfillmentVariantVersion;

  // @ManyToOne(() => Product, (product) => product.dos, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product_2: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => TermVersion, (termVersion) => termVersion.dos, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'term_version_id', referencedColumnName: 'id' }])
  termVersion: TermVersion;

  // @ManyToOne(() => Variant, (variant) => variant.dos2, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant_2: Variant;

  // @OneToOne(() => DoAge, (doAge) => doAge.do)
  doAge: DoAge;

  // @OneToMany(() => DoParcel, (doParcel) => doParcel.do)
  doParcels: DoParcel[];

  // @OneToMany(() => PoRiskHistory, (poRiskHistory) => poRiskHistory.do)
  poRiskHistories: PoRiskHistory[];
}
