import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { InventoryDelivery } from './InventoryDelivery';
import { Variant } from './Variant';
import { PurchaseDetailDeliveryDetail } from './PurchaseDetailDeliveryDetail';

@Index('PK_inventory_delivery_detail', ['id'], { unique: true })
@Index('IX_inventory_delivery_detail_inventory_delivery_id', ['inventoryDeliveryId'], {})
@Index('IX_inventory_delivery_detail_variant_id', ['variantId'], {})
@Entity('inventory_delivery_detail', { schema: 'public' })
export class InventoryDeliveryDetail {
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

  @Column('text', { name: 'inventory_delivery_id', nullable: true })
  inventoryDeliveryId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('integer', { name: 'shipout_quantity' })
  shipoutQuantity: number;

  @Column('integer', { name: 'stockin_quantity' })
  stockinQuantity: number;

  @ManyToOne(() => InventoryDelivery, (inventoryDelivery) => inventoryDelivery.inventoryDeliveryDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_delivery_id', referencedColumnName: 'id' }])
  inventoryDelivery: InventoryDelivery;

  // @ManyToOne(() => Variant, (variant) => variant.inventoryDeliveryDetails, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;

  @OneToMany(
    () => PurchaseDetailDeliveryDetail,
    (purchaseDetailDeliveryDetail) => purchaseDetailDeliveryDetail.inventoryDeliveryDetail
  )
  purchaseDetailDeliveryDetails: PurchaseDetailDeliveryDetail[];
}
