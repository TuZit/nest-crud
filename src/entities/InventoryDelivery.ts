import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Factory } from './Factory';
import { Supplier } from './Supplier';
import { InventoryDeliveryDetail } from './InventoryDeliveryDetail';
import { PurchaseDelivery } from './PurchaseDelivery';
import { PurchaseDetailDeliveryDetail } from './PurchaseDetailDeliveryDetail';

@Index('IX_inventory_delivery_factory_id', ['factoryId'], {})
@Index('PK_inventory_delivery', ['id'], { unique: true })
@Index('IX_inventory_delivery_supplier_id', ['supplierId'], {})
@Entity('inventory_delivery', { schema: 'public' })
export class InventoryDelivery {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'tracking_number', nullable: true })
  trackingNumber: string | null;

  @Column('timestamp without time zone', {
    name: 'shipout_date',
    nullable: true
  })
  shipoutDate: Date | null;

  @Column('timestamp without time zone', {
    name: 'delivery_date',
    nullable: true
  })
  deliveryDate: Date | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('timestamp without time zone', {
    name: 'import_date',
    nullable: true
  })
  importDate: Date | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @ManyToOne(() => Factory, (factory) => factory.inventoryDeliveries, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  // @ManyToOne(() => Supplier, (supplier) => supplier.inventoryDeliveries, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @OneToMany(() => InventoryDeliveryDetail, (inventoryDeliveryDetail) => inventoryDeliveryDetail.inventoryDelivery)
  inventoryDeliveryDetails: InventoryDeliveryDetail[];

  @OneToMany(() => PurchaseDelivery, (purchaseDelivery) => purchaseDelivery.inventoryDelivery)
  purchaseDeliveries: PurchaseDelivery[];

  @OneToMany(
    () => PurchaseDetailDeliveryDetail,
    (purchaseDetailDeliveryDetail) => purchaseDetailDeliveryDetail.inventoryDelivery
  )
  purchaseDetailDeliveryDetails: PurchaseDetailDeliveryDetail[];
}
