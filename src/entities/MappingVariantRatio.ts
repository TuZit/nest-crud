import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Variant } from './Variant';
import { Product } from './Product';

@Index('IX_mapping_variant_ratio_basic_variant_id', ['basicVariantId'], {})
@Index('IX_mapping_variant_ratio_core_variant_id', ['coreVariantId'], {})
@Index('IX_mapping_variant_ratio_destination_product_id', ['destinationProductId'], {})
@Index('PK_mapping_variant_ratio', ['id'], { unique: true })
@Index('IX_mapping_variant_ratio_source_product_id', ['sourceProductId'], {})
@Entity('mapping_variant_ratio', { schema: 'public' })
export class MappingVariantRatio {
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

  @Column('text', { name: 'source_product_id', nullable: true })
  sourceProductId: string | null;

  @Column('text', { name: 'destination_product_id', nullable: true })
  destinationProductId: string | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('timestamp without time zone', {
    name: 'status_date_inactive',
    nullable: true
  })
  statusDateInactive: Date | null;

  // @ManyToOne(() => Variant, (variant) => variant.mappingVariantRatios, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'basic_variant_id', referencedColumnName: 'id' }])
  basicVariant: Variant;

  // @ManyToOne(() => Variant, (variant) => variant.mappingVariantRatios2, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'core_variant_id', referencedColumnName: 'id' }])
  coreVariant: Variant;

  @ManyToOne(() => Product, (product) => product.mappingVariantRatios, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'destination_product_id', referencedColumnName: 'id' }])
  destinationProduct: Product;

  @ManyToOne(() => Product, (product) => product.mappingVariantRatios2, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'source_product_id', referencedColumnName: 'id' }])
  sourceProduct: Product;
}
