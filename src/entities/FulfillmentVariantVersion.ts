import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { ContractVersionFfmvVersion } from './ContractVersionFfmvVersion';
import { DistributionDaily } from './DistributionDaily';
import { Do } from './Do';
import { FulfillmentScore } from './FulfillmentScore';
import { FulfillmentVariantFulfillmentVersion } from './FulfillmentVariantFulfillmentVersion';
import { Factory } from './Factory';
import { Product } from './Product';
import { TariffConfig } from './TariffConfig';
import { FulfillmentVariantVersionHistory } from './FulfillmentVariantVersionHistory';
import { MappingSaleFulfillmentVariant } from './MappingSaleFulfillmentVariant';
import { MoqRequest } from './MoqRequest';
import { MoqRequirement } from './MoqRequirement';
import { MoqSalesRequest } from './MoqSalesRequest';
import { TariffConfigProductHistory } from './TariffConfigProductHistory';
import { VariantConfig } from './VariantConfig';

@Index('IX_fulfillment_variant_version_factory_id', ['factoryId'], {})
@Index('PK_fulfillment_variant_version', ['id'], { unique: true })
@Index('IX_fulfillment_variant_version_product_id', ['productId'], {})
@Index('IX_fulfillment_variant_version_tariff_config_id', ['tariffConfigId'], {})
@Entity('fulfillment_variant_version', { schema: 'public' })
export class FulfillmentVariantVersion {
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('boolean', { name: 'is_primary' })
  isPrimary: boolean;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('jsonb', { name: 'reasons', nullable: true })
  reasons: object | null;

  @Column('text', { name: 'origin_version_id', nullable: true })
  originVersionId: string | null;

  @Column('text', { name: 'column_variant_display', nullable: true, array: true })
  columnVariantDisplay: string[] | null;

  @Column('text', { name: 'row_variant_display', nullable: true, array: true })
  rowVariantDisplay: string[] | null;

  @Column('text', { name: 'tariff_config_id', nullable: true })
  tariffConfigId: string | null;

  @OneToMany(() => ContractVersion, (contractVersion) => contractVersion.fulfillmentVariantVersion)
  contractVersions: ContractVersion[];

  @OneToMany(
    () => ContractVersionFfmvVersion,
    (contractVersionFfmvVersion) => contractVersionFfmvVersion.fulfillmentVariantVersion
  )
  contractVersionFfmvVersions: ContractVersionFfmvVersion[];

  @OneToMany(() => DistributionDaily, (distributionDaily) => distributionDaily.fulfillmentVariantVersion)
  distributionDailies: DistributionDaily[];

  // @OneToMany(()=>Do,do=>do.fulfillmentVariantVersion)

  dos: Do[];

  // @OneToMany(()=>Do,do=>do.originFulfillmentVariantVersion)

  dos2: Do[];

  @OneToMany(() => FulfillmentScore, (fulfillmentScore) => fulfillmentScore.fulfillmentVariantVersion)
  fulfillmentScores: FulfillmentScore[];

  @OneToMany(
    () => FulfillmentVariantFulfillmentVersion,
    (fulfillmentVariantFulfillmentVersion) => fulfillmentVariantFulfillmentVersion.fulfillmentVariantVersion
  )
  fulfillmentVariantFulfillmentVersions: FulfillmentVariantFulfillmentVersion[];

  @ManyToOne(() => Factory, (factory) => factory.fulfillmentVariantVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'factory_id', referencedColumnName: 'id' }])
  factory: Factory;

  @ManyToOne(() => Product, (product) => product.fulfillmentVariantVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => TariffConfig, (tariffConfig) => tariffConfig.fulfillmentVariantVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'tariff_config_id', referencedColumnName: 'id' }])
  tariffConfig: TariffConfig;

  @OneToMany(
    () => FulfillmentVariantVersionHistory,
    (fulfillmentVariantVersionHistory) => fulfillmentVariantVersionHistory.fulfillmentVariantVersion
  )
  fulfillmentVariantVersionHistories: FulfillmentVariantVersionHistory[];

  @OneToMany(
    () => MappingSaleFulfillmentVariant,
    (mappingSaleFulfillmentVariant) => mappingSaleFulfillmentVariant.fulfillmentVariantVersion
  )
  mappingSaleFulfillmentVariants: MappingSaleFulfillmentVariant[];

  @OneToMany(() => MoqRequest, (moqRequest) => moqRequest.fulfillmentVariantVersion)
  moqRequests: MoqRequest[];

  @OneToMany(() => MoqRequirement, (moqRequirement) => moqRequirement.fulfillmentVariantVersion)
  moqRequirements: MoqRequirement[];

  @OneToMany(() => MoqSalesRequest, (moqSalesRequest) => moqSalesRequest.fulfillmentVariantVersion)
  moqSalesRequests: MoqSalesRequest[];

  @OneToMany(
    () => TariffConfigProductHistory,
    (tariffConfigProductHistory) => tariffConfigProductHistory.fulfillmentVariantVersion
  )
  tariffConfigProductHistories: TariffConfigProductHistory[];

  @OneToMany(() => VariantConfig, (variantConfig) => variantConfig.fulfillmentVariantVersion)
  variantConfigs: VariantConfig[];
}
