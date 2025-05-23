import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { InventoryDeliveryDetail } from './InventoryDeliveryDetail';
import { InventoryDelivery } from './InventoryDelivery';
import { InventoryPurchaseDetail } from './InventoryPurchaseDetail';
import { InventoryPurchase } from './InventoryPurchase';

@Index('PK_purchase_detail_delivery_detail', ['id'], { unique: true })
@Index('IX_purchase_detail_delivery_detail_inventory_delivery_detail_id', ['inventoryDeliveryDetailId'], {})
@Index('IX_purchase_detail_delivery_detail_inventory_delivery_id', ['inventoryDeliveryId'], {})
@Index('IX_purchase_detail_delivery_detail_inventory_purchase_detail_id', ['inventoryPurchaseDetailId'], {})
@Index('IX_purchase_detail_delivery_detail_inventory_purchase_id', ['inventoryPurchaseId'], {})
@Entity('purchase_detail_delivery_detail', { schema: 'public' })
export class PurchaseDetailDeliveryDetail {
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

  @Column('text', { name: 'inventory_purchase_detail_id', nullable: true })
  inventoryPurchaseDetailId: string | null;

  @Column('text', { name: 'inventory_delivery_detail_id', nullable: true })
  inventoryDeliveryDetailId: string | null;

  @Column('text', { name: 'inventory_purchase_id', nullable: true })
  inventoryPurchaseId: string | null;

  @Column('text', { name: 'inventory_delivery_id', nullable: true })
  inventoryDeliveryId: string | null;

  @Column('integer', { name: 'shipout_quantity', default: () => '0' })
  shipoutQuantity: number;

  @Column('integer', { name: 'stockin_quantity', default: () => '0' })
  stockinQuantity: number;

  @ManyToOne(
    () => InventoryDeliveryDetail,
    (inventoryDeliveryDetail) => inventoryDeliveryDetail.purchaseDetailDeliveryDetails,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'inventory_delivery_detail_id', referencedColumnName: 'id' }])
  inventoryDeliveryDetail: InventoryDeliveryDetail;

  @ManyToOne(() => InventoryDelivery, (inventoryDelivery) => inventoryDelivery.purchaseDetailDeliveryDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_delivery_id', referencedColumnName: 'id' }])
  inventoryDelivery: InventoryDelivery;

  @ManyToOne(
    () => InventoryPurchaseDetail,
    (inventoryPurchaseDetail) => inventoryPurchaseDetail.purchaseDetailDeliveryDetails,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'inventory_purchase_detail_id', referencedColumnName: 'id' }])
  inventoryPurchaseDetail: InventoryPurchaseDetail;

  @ManyToOne(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.purchaseDetailDeliveryDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_purchase_id', referencedColumnName: 'id' }])
  inventoryPurchase: InventoryPurchase;
}
