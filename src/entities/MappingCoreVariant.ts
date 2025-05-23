import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Variant } from './Variant';
import { Product } from './Product';

@Index('IX_mapping_core_variant_basic_variant_id', ['basicVariantId'], {})
@Index('IX_mapping_core_variant_core_variant_id', ['coreVariantId'], {})
@Index('PK_mapping_core_variant', ['id'], { unique: true })
@Index('IX_mapping_core_variant_product_id', ['productId'], {})
@Entity('mapping_core_variant', { schema: 'public' })
export class MappingCoreVariant {
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

  @Column('text', { name: 'basic_variant_id', nullable: true })
  basicVariantId: string | null;

  @Column('text', { name: 'core_variant_id', nullable: true })
  coreVariantId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  // @ManyToOne(() => Variant, (variant) => variant.mappingCoreVariants, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'basic_variant_id', referencedColumnName: 'id' }])
  basicVariant: Variant;

  // @ManyToOne(() => Variant, (variant) => variant.mappingCoreVariants2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'core_variant_id', referencedColumnName: 'id' }])
  coreVariant: Variant;

  @ManyToOne(() => Product, (product) => product.mappingCoreVariants, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
