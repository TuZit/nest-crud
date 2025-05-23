import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { InventoryPurchase } from './InventoryPurchase';
import { InventoryPurchaseDetail } from './InventoryPurchaseDetail';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { InventoryRequestDetail } from './InventoryRequestDetail';

@Index('PK_inventory_request', ['id'], { unique: true })
@Index('IX_inventory_request_product_id', ['productId'], {})
@Index('IX_inventory_request_supplier_id', ['supplierId'], {})
@Entity('inventory_request', { schema: 'public' })
export class InventoryRequest {
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

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @OneToMany(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.inventoryRequest)
  inventoryPurchases: InventoryPurchase[];

  @OneToMany(() => InventoryPurchaseDetail, (inventoryPurchaseDetail) => inventoryPurchaseDetail.inventoryRequest)
  inventoryPurchaseDetails: InventoryPurchaseDetail[];

  @ManyToOne(() => Product, (product) => product.inventoryRequests, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Supplier, (supplier) => supplier.inventoryRequests, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @OneToMany(() => InventoryRequestDetail, (inventoryRequestDetail) => inventoryRequestDetail.inventoryRequest)
  inventoryRequestDetails: InventoryRequestDetail[];
}
