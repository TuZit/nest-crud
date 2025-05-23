import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Supplier } from './Supplier';
import { Variant } from './Variant';

@Index('PK_variant_supplier', ['supplierId', 'variantId'], { unique: true })
@Index('IX_variant_supplier_variant_id', ['variantId'], {})
@Entity('variant_supplier', { schema: 'public' })
export class VariantSupplier {
  @Column('text', { primary: true, name: 'variant_id' })
  variantId: string;

  @Column('text', { primary: true, name: 'supplier_id' })
  supplierId: string;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @ManyToOne(() => Supplier, (supplier) => supplier.variantSuppliers, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @ManyToOne(() => Variant, (variant) => variant.variantSuppliers, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
