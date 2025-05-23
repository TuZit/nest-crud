import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Variant } from './Variant';

@Index('PK_mapping_sku', ['id'], { unique: true })
@Index('IX_mapping_sku_product_id', ['productId'], {})
@Index('IX_mapping_sku_variant_id', ['variantId'], {})
@Entity('mapping_sku', { schema: 'public' })
export class MappingSku {
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

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'factory_sku', nullable: true })
  factorySku: string | null;

  @Column('text', { name: 'supplier_sku', nullable: true })
  supplierSku: string | null;

  @ManyToOne(() => Product, (product) => product.mappingSkus, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Variant, (variant) => variant.mappingSkus, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
