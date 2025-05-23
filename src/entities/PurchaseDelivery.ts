import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { InventoryDelivery } from './InventoryDelivery';
import { InventoryPurchase } from './InventoryPurchase';

@Index('PK_purchase_delivery', ['id'], { unique: true })
@Index('IX_purchase_delivery_inventory_delivery_id', ['inventoryDeliveryId'], {})
@Index('IX_purchase_delivery_inventory_purchase_id', ['inventoryPurchaseId'], {})
@Entity('purchase_delivery', { schema: 'public' })
export class PurchaseDelivery {
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

  @Column('text', { name: 'inventory_delivery_id', nullable: true })
  inventoryDeliveryId: string | null;

  @ManyToOne(() => InventoryDelivery, (inventoryDelivery) => inventoryDelivery.purchaseDeliveries, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_delivery_id', referencedColumnName: 'id' }])
  inventoryDelivery: InventoryDelivery;

  @ManyToOne(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.purchaseDeliveries, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_purchase_id', referencedColumnName: 'id' }])
  inventoryPurchase: InventoryPurchase;
}
