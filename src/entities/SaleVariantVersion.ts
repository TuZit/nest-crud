import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MappingVersion } from './MappingVersion';
import { Variant } from './Variant';

@Index('PK_sale_variant_version', ['id'], { unique: true })
@Entity('sale_variant_version', { schema: 'public' })
export class SaleVariantVersion {
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

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @OneToMany(() => MappingVersion, (mappingVersion) => mappingVersion.saleVariantVersion)
  mappingVersions: MappingVersion[];

  // @OneToMany(() => Variant, (variant) => variant.saleVersion)
  variants: Variant[];
}
