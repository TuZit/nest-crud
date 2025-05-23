import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Variant } from './Variant';
import { Product } from './Product';

@Index('IX_mapping_variant_basic_variant_id', ['basicVariantId'], {})
@Index('IX_mapping_variant_destination_product_id', ['destinationProductId'], {})
@Index('IX_mapping_variant_destination_variant_id', ['destinationVariantId'], {})
@Index('PK_mapping_variant', ['id'], { unique: true })
@Index('IX_mapping_variant_source_product_id', ['sourceProductId'], {})
@Index('IX_mapping_variant_source_variant_id', ['sourceVariantId'], {})
@Entity('mapping_variant', { schema: 'public' })
export class MappingVariant {
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

  @Column('text', { name: 'source_variant_id', nullable: true })
  sourceVariantId: string | null;

  @Column('text', { name: 'destination_variant_id', nullable: true })
  destinationVariantId: string | null;

  @Column('text', { name: 'source_product_id', nullable: true })
  sourceProductId: string | null;

  @Column('text', { name: 'destination_product_id', nullable: true })
  destinationProductId: string | null;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'basic_variant_id', nullable: true })
  basicVariantId: string | null;

  @Column('numeric', { name: 'sold_ratio', nullable: true })
  soldRatio: string | null;

  // @ManyToOne(() => Variant, (variant) => variant.mappingVariants, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'basic_variant_id', referencedColumnName: 'id' }])
  basicVariant: Variant;

  @ManyToOne(() => Product, (product) => product.mappingVariants, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'destination_product_id', referencedColumnName: 'id' }])
  destinationProduct: Product;

  // @ManyToOne(() => Variant, (variant) => variant.mappingVariants2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'destination_variant_id', referencedColumnName: 'id' }])
  destinationVariant: Variant;

  @ManyToOne(() => Product, (product) => product.mappingVariants2, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'source_product_id', referencedColumnName: 'id' }])
  sourceProduct: Product;

  // @ManyToOne(() => Variant, (variant) => variant.mappingVariants3, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'source_variant_id', referencedColumnName: 'id' }])
  sourceVariant: Variant;
}
