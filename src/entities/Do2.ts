import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Contract } from './Contract';
import { ContractVersion } from './ContractVersion';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';
import { Variant } from './Variant';

@Index('PK_do2', ['id'], { unique: true })
@Entity('do2', { schema: 'public' })
export class Do2 {
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

  @ManyToOne(() => Contract, (contract) => contract.dos2, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'contract_id', referencedColumnName: 'id' }])
  contract: Contract;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.dos2, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;

  @ManyToOne(() => Product, (product) => product.dos2, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.dos2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => TermVersion, (termVersion) => termVersion.dos2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'term_version_id', referencedColumnName: 'id' }])
  termVersion: TermVersion;

  // @ManyToOne(() => Variant, (variant) => variant.dos3, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
