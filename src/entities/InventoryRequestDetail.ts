import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { InventoryRequest } from './InventoryRequest';
import { Product } from './Product';
import { Variant } from './Variant';

@Index('PK_inventory_request_detail', ['id'], { unique: true })
@Index('IX_inventory_request_detail_inventory_request_id', ['inventoryRequestId'], {})
@Index('IX_inventory_request_detail_product_id', ['productId'], {})
@Index('IX_inventory_request_detail_variant_id', ['variantId'], {})
@Entity('inventory_request_detail', { schema: 'public' })
export class InventoryRequestDetail {
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

  @Column('text', { name: 'inventory_request_id', nullable: true })
  inventoryRequestId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @ManyToOne(() => InventoryRequest, (inventoryRequest) => inventoryRequest.inventoryRequestDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'inventory_request_id', referencedColumnName: 'id' }])
  inventoryRequest: InventoryRequest;

  @ManyToOne(() => Product, (product) => product.inventoryRequestDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Variant, (variant) => variant.inventoryRequestDetails, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
