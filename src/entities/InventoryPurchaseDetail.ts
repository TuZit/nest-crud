import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Do } from './Do';
import { InventoryPurchase } from './InventoryPurchase';
import { InventoryRequest } from './InventoryRequest';
import { Variant } from './Variant';
import { PurchaseDetailDeliveryDetail } from './PurchaseDetailDeliveryDetail';

@Index('PK_inventory_purchase_detail', ['id'], { unique: true })
@Index('IX_inventory_purchase_detail_inventory_purchase_id', ['inventoryPurchaseId'], {})
@Index('IX_inventory_purchase_detail_inventory_request_id', ['inventoryRequestId'], {})
@Index('IX_inventory_purchase_detail_variant_id', ['variantId'], {})
@Entity('inventory_purchase_detail', { schema: 'public' })
export class InventoryPurchaseDetail {
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

  @Column('text', { name: 'inventory_purchase_id', nullable: true })
  inventoryPurchaseId: string | null;

  @Column('text', { name: 'inventory_request_id', nullable: true })
  inventoryRequestId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @Column('integer', { name: 'shipout_quantity' })
  shipoutQuantity: number;

  @Column('integer', { name: 'stockin_quantity' })
  stockinQuantity: number;

  @Column('integer', { name: 'stockout_quantity' })
  stockoutQuantity: number;

  @Column('numeric', { name: 'unit_price' })
  unitPrice: string;

  @Column('numeric', { name: 'shipping_fee' })
  shippingFee: string;

  @Column('numeric', { name: 'discount' })
  discount: string;

  @Column('text', { name: 'last_do_id', nullable: true })
  lastDoId: string | null;

  @Column('numeric', { name: 'spare_amount', nullable: true })
  spareAmount: string | null;

  @Column('integer', { name: 'refund_quantity', nullable: true })
  refundQuantity: number | null;

  @Column('boolean', { name: 'is_multi_variant', nullable: true })
  isMultiVariant: boolean | null;

  @Column('text', { name: 'origin_variant_id', nullable: true })
  originVariantId: string | null;

  // @OneToMany(()=>Do,do=>do.inventoryPurchaseDetail)

  dos: Do[];

  @ManyToOne(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.inventoryPurchaseDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_purchase_id', referencedColumnName: 'id' }])
  inventoryPurchase: InventoryPurchase;

  @ManyToOne(() => InventoryRequest, (inventoryRequest) => inventoryRequest.inventoryPurchaseDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_request_id', referencedColumnName: 'id' }])
  inventoryRequest: InventoryRequest;

  //   @ManyToOne(() => Variant, (variant) => variant.inventoryPurchaseDetails, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;

  @OneToMany(
    () => PurchaseDetailDeliveryDetail,
    (purchaseDetailDeliveryDetail) => purchaseDetailDeliveryDetail.inventoryPurchaseDetail
  )
  purchaseDetailDeliveryDetails: PurchaseDetailDeliveryDetail[];
}
