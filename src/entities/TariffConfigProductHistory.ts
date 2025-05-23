import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Product } from './Product';
import { TariffConfig } from './TariffConfig';

@Index('IX_tariff_config_product_history_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_tariff_config_product_history', ['id'], { unique: true })
@Index('IX_tariff_config_product_history_product_id', ['productId'], {})
@Index('IX_tariff_config_product_history_tariff_config_id', ['tariffConfigId'], {})
@Entity('tariff_config_product_history', { schema: 'public' })
export class TariffConfigProductHistory {
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

  @Column('text', { name: 'updated_by_email', nullable: true })
  updatedByEmail: string | null;

  @Column('text', { name: 'tariff_config_id', nullable: true })
  tariffConfigId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('jsonb', { name: 'detail', nullable: true })
  detail: object | null;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.tariffConfigProductHistories,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => Product, (product) => product.tariffConfigProductHistories, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => TariffConfig, (tariffConfig) => tariffConfig.tariffConfigProductHistories, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'tariff_config_id', referencedColumnName: 'id' }])
  tariffConfig: TariffConfig;
}
