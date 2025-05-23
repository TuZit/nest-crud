import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Variant } from './Variant';

@Index('PK_plan_days_to_sale', ['id'], { unique: true })
@Index('IX_plan_days_to_sale_product_id', ['productId'], {})
@Index('IX_plan_days_to_sale_variant_id', ['variantId'], {})
@Entity('plan_days_to_sale', { schema: 'public' })
export class PlanDaysToSale {
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

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('integer', { name: 'days' })
  days: number;

  @Column('boolean', { name: 'active', default: () => 'false' })
  active: boolean;

  @ManyToOne(() => Product, (product) => product.planDaysToSales, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  // @ManyToOne(() => Variant, (variant) => variant.planDaysToSales, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
