import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { MappingSaleFulfillmentVariant } from './MappingSaleFulfillmentVariant';
import { SaleVariantVersion } from './SaleVariantVersion';

@Index('PK_mapping_version', ['id'], { unique: true })
@Index('IX_mapping_version_sale_variant_version_id', ['saleVariantVersionId'], {})
@Entity('mapping_version', { schema: 'public' })
export class MappingVersion {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('boolean', { name: 'primary', nullable: true })
  primary: boolean | null;

  @Column('text', { name: 'origin_mapping_version_id', nullable: true })
  originMappingVersionId: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('text', { name: 'creator_email', nullable: true })
  creatorEmail: string | null;

  @Column('timestamp without time zone', {
    name: 'last_activated_date',
    nullable: true
  })
  lastActivatedDate: Date | null;

  @Column('timestamp without time zone', {
    name: 'last_deactivated_date',
    nullable: true
  })
  lastDeactivatedDate: Date | null;

  @Column('text', { name: 'root_mapping_version_id', nullable: true })
  rootMappingVersionId: string | null;

  @Column('text', { name: 'sale_variant_version_id', nullable: true })
  saleVariantVersionId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @OneToMany(
    () => MappingSaleFulfillmentVariant,
    (mappingSaleFulfillmentVariant) => mappingSaleFulfillmentVariant.mappingVersion
  )
  mappingSaleFulfillmentVariants: MappingSaleFulfillmentVariant[];

  @ManyToOne(() => SaleVariantVersion, (saleVariantVersion) => saleVariantVersion.mappingVersions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'sale_variant_version_id', referencedColumnName: 'id' }])
  saleVariantVersion: SaleVariantVersion;
}
