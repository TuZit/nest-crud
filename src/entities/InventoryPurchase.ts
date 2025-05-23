import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Factory } from './Factory';
import { InventoryRequest } from './InventoryRequest';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { InventoryPurchaseDetail } from './InventoryPurchaseDetail';
import { PurchaseDelivery } from './PurchaseDelivery';
import { PurchaseDetailDeliveryDetail } from './PurchaseDetailDeliveryDetail';

@Index('IX_inventory_purchase_factory_id', ['factoryId'], {})
@Index('PK_inventory_purchase', ['id'], { unique: true })
@Index('IX_inventory_purchase_inventory_request_id', ['inventoryRequestId'], {})
@Index('IX_inventory_purchase_product_id', ['productId'], {})
@Index('IX_inventory_purchase_supplier_id', ['supplierId'], {})
@Entity('inventory_purchase', { schema: 'public' })
export class InventoryPurchase {
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

  @Column('text', { name: 'inventory_request_id', nullable: true })
  inventoryRequestId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('numeric', { name: 'subtotal' })
  subtotal: string;

  @Column('numeric', { name: 'total' })
  total: string;

  @Column('numeric', { name: 'shipping_fee' })
  shippingFee: string;

  @Column('numeric', { name: 'discount' })
  discount: string;

  @Column('timestamp without time zone', {
    name: 'purchase_date',
    nullable: true
  })
  purchaseDate: Date | null;

  @Column('numeric', { name: 'exchange_rate', default: () => '0.0' })
  exchangeRate: string;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'status_1688', nullable: true })
  status_1688: string | null;

  @ManyToOne(() => Factory, (factory) => factory.inventoryPurchases, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  @ManyToOne(() => InventoryRequest, (inventoryRequest) => inventoryRequest.inventoryPurchases, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_request_id', referencedColumnName: 'id' }])
  inventoryRequest: InventoryRequest;

  @ManyToOne(() => Product, (product) => product.inventoryPurchases, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.inventoryPurchases, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @OneToMany(() => InventoryPurchaseDetail, (inventoryPurchaseDetail) => inventoryPurchaseDetail.inventoryPurchase)
  inventoryPurchaseDetails: InventoryPurchaseDetail[];

  @OneToMany(() => PurchaseDelivery, (purchaseDelivery) => purchaseDelivery.inventoryPurchase)
  purchaseDeliveries: PurchaseDelivery[];

  @OneToMany(
    () => PurchaseDetailDeliveryDetail,
    (purchaseDetailDeliveryDetail) => purchaseDetailDeliveryDetail.inventoryPurchase
  )
  purchaseDetailDeliveryDetails: PurchaseDetailDeliveryDetail[];
}
