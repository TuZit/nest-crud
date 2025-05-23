import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Variant } from './Variant';

@Index('IX_variant_ingredient_ingredient_variant_id', ['ingredientVariantId'], {})
@Index('PK_variant_ingredient', ['ingredientVariantId', 'variantId'], {
  unique: true
})
@Entity('variant_ingredient', { schema: 'public' })
export class VariantIngredient {
  @Column('text', { primary: true, name: 'variant_id' })
  variantId: string;

  @Column('text', { primary: true, name: 'ingredient_variant_id' })
  ingredientVariantId: string;

  @Column('integer', { name: 'amount' })
  amount: number;

  @Column('text', { name: 'color', nullable: true })
  color: string | null;

  @Column('text', { name: 'size', nullable: true })
  size: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @ManyToOne(() => Variant, (variant) => variant.variantIngredients, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'ingredient_variant_id', referencedColumnName: 'id' }])
  ingredientVariant: Variant;

  @ManyToOne(() => Variant, (variant) => variant.variantIngredients2, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
