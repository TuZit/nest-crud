import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Contract } from './Contract';
import { ContractQuantity } from './ContractQuantity';
import { ContractVersion } from './ContractVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';
import { Variant } from './Variant';

@Index('idx_do_code_copy1', ['code'], {})
@Index('IX_do_contract_id_copy1', ['contractId'], {})
@Index('IX_do_contract_quantity_id_copy1', ['contractQuantityId'], {})
@Index('IX_do_contract_version_id_copy1', ['contractVersionId'], {})
@Index('do_copy1_pkey', ['id'], { unique: true })
@Index('IX_do_origin_do_id_copy1', ['originDoId'], {})
@Index('IX_do_po_id_index_copy1', ['poId'], {})
@Index('IX_do_product_id_copy1', ['productId'], {})
@Index('IX_do_supplier_id_copy1', ['supplierId'], {})
@Index('IX_do_term_version_id_copy1', ['termVersionId'], {})
@Index('IX_do_variant_id_copy1', ['variantId'], {})
@Entity('do_copy1', { schema: 'public' })
export class DoCopy1 {
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

  @ManyToOne(() => Contract, (contract) => contract.doCopies, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'contract_id', referencedColumnName: 'id' }])
  contract: Contract;

  @ManyToOne(() => ContractQuantity, (contractQuantity) => contractQuantity.doCopies, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_quantity_id', referencedColumnName: 'id' }])
  contractQuantity: ContractQuantity;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.doCopies, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Product, (product) => product.doCopies, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.doCopies, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => TermVersion, (termVersion) => termVersion.doCopies, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'term_version_id', referencedColumnName: 'id' }])
  termVersion: TermVersion;

  // @ManyToOne(() => Variant, (variant) => variant.doCopies, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
