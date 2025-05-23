import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Variant } from './Variant';

@Index('PK_pending_distribution', ['id'], { unique: true })
@Index('IX_pending_distribution_product_id', ['productId'], {})
@Index('IX_pending_distribution_variant_id', ['variantId'], {})
@Entity('pending_distribution', { schema: 'public' })
export class PendingDistribution {
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

  @Column('text', { name: 'po_id' })
  poId: string;

  @Column('text', { name: 'do_id' })
  doId: string;

  @Column('text', { name: 'variant_id' })
  variantId: string;

  @Column('text', { name: 'product_id' })
  productId: string;

  @ManyToOne(() => Product, (product) => product.pendingDistributions, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Variant, (variant) => variant.pendingDistributions, {
  //   onDelete: 'CASCADE'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
