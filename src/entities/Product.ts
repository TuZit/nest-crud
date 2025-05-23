import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Contract } from './Contract';
import { ContractQuantity } from './ContractQuantity';
import { ContractVersionFfmvVersion } from './ContractVersionFfmvVersion';
import { Distribution } from './Distribution';
import { DistributionDaily } from './DistributionDaily';
import { Do } from './Do';
import { Do2 } from './Do2';
import { DoCopy1 } from './DoCopy1';
import { DynamicPrice } from './DynamicPrice';
import { FulfillmentScore } from './FulfillmentScore';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Inventory } from './Inventory';
import { InventoryPurchase } from './InventoryPurchase';
import { InventoryRequest } from './InventoryRequest';
import { InventoryRequestDetail } from './InventoryRequestDetail';
import { MappingCoreVariant } from './MappingCoreVariant';
import { MappingSaleFulfillmentVariant } from './MappingSaleFulfillmentVariant';
import { MappingSku } from './MappingSku';
import { MappingVariant } from './MappingVariant';
import { MappingVariantRatio } from './MappingVariantRatio';
import { PendingDistribution } from './PendingDistribution';
import { PlanDaysToSale } from './PlanDaysToSale';
import { TariffConfig } from './TariffConfig';
import { ProductSupplier } from './ProductSupplier';
import { ProductionLeadTime } from './ProductionLeadTime';
import { SaleForecast } from './SaleForecast';
import { TariffConfigProductHistory } from './TariffConfigProductHistory';
import { Variant } from './Variant';

@Index('PK_product', ['id'], { unique: true })
@Index('IX_product_tariff_config_id', ['tariffConfigId'], {})
@Entity('product', { schema: 'public' })
export class Product {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'line', nullable: true })
  line: string | null;

  @Column('text', { name: 'family', nullable: true })
  family: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'sale_status' })
  saleStatus: string;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('double precision', { name: 'surplus_ratio', precision: 53 })
  surplusRatio: number;

  @Column('jsonb', { name: 'images_uri', nullable: true })
  imagesUri: object | null;

  @Column('text', { name: 'contract_form', nullable: true })
  contractForm: string | null;

  @Column('boolean', { name: 'is_core_variant', nullable: true })
  isCoreVariant: boolean | null;

  @Column('text', { name: 'column_variant_display', nullable: true, array: true })
  columnVariantDisplay: string[] | null;

  @Column('boolean', { name: 'is_core_product', nullable: true })
  isCoreProduct: boolean | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'row_variant_display', nullable: true, array: true })
  rowVariantDisplay: string[] | null;

  @Column('text', { name: 'moq_tracking_status', nullable: true })
  moqTrackingStatus: string | null;

  @Column('boolean', { name: 'exist_product_core', nullable: true })
  existProductCore: boolean | null;

  @Column('text', { name: 'url_discussion', nullable: true })
  urlDiscussion: string | null;

  @Column('boolean', { name: 'is_alert_dts', nullable: true })
  isAlertDts: boolean | null;

  @Column('boolean', { name: 'is_clear_stock', nullable: true })
  isClearStock: boolean | null;

  @Column('text', { name: 'fulfillment_email', nullable: true })
  fulfillmentEmail: string | null;

  @Column('text', { name: 'merchandiser_email', nullable: true })
  merchandiserEmail: string | null;

  @Column('text', { name: 'fulfillment_slack_id', nullable: true })
  fulfillmentSlackId: string | null;

  @Column('text', { name: 'merchandiser_slack_id', nullable: true })
  merchandiserSlackId: string | null;

  @Column('boolean', { name: 'is_multiple_ffm_variant', nullable: true })
  isMultipleFfmVariant: boolean | null;

  @Column('boolean', { name: 'is_auto_distribution_ratio', nullable: true })
  isAutoDistributionRatio: boolean | null;

  @Column('text', { name: 'tariff_config_id', nullable: true })
  tariffConfigId: string | null;

  @OneToMany(() => Contract, (contract) => contract.product)
  contracts: Contract[];

  @OneToMany(() => ContractQuantity, (contractQuantity) => contractQuantity.product)
  contractQuantities: ContractQuantity[];

  @OneToMany(() => ContractVersionFfmvVersion, (contractVersionFfmvVersion) => contractVersionFfmvVersion.product)
  contractVersionFfmvVersions: ContractVersionFfmvVersion[];

  @OneToMany(() => Distribution, (distribution) => distribution.product)
  distributions: Distribution[];

  @OneToMany(() => DistributionDaily, (distributionDaily) => distributionDaily.product)
  distributionDailies: DistributionDaily[];

  // @OneToMany(()=>Do,do=>do.product_2)

  dos: Do[];

  @OneToMany(() => Do2, (do2) => do2.product)
  dos2: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.product)
  doCopies: DoCopy1[];

  @OneToMany(() => DynamicPrice, (dynamicPrice) => dynamicPrice.product)
  dynamicPrices: DynamicPrice[];

  @OneToMany(() => FulfillmentScore, (fulfillmentScore) => fulfillmentScore.product)
  fulfillmentScores: FulfillmentScore[];

  //   @OneToMany(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.product)
  fulfillmentVariantVersions: FulfillmentVariantVersion[];

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventories: Inventory[];

  @OneToMany(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.product)
  inventoryPurchases: InventoryPurchase[];

  @OneToMany(() => InventoryRequest, (inventoryRequest) => inventoryRequest.product)
  inventoryRequests: InventoryRequest[];

  @OneToMany(() => InventoryRequestDetail, (inventoryRequestDetail) => inventoryRequestDetail.product)
  inventoryRequestDetails: InventoryRequestDetail[];

  @OneToMany(() => MappingCoreVariant, (mappingCoreVariant) => mappingCoreVariant.product)
  mappingCoreVariants: MappingCoreVariant[];

  @OneToMany(
    () => MappingSaleFulfillmentVariant,
    (mappingSaleFulfillmentVariant) => mappingSaleFulfillmentVariant.product
  )
  mappingSaleFulfillmentVariants: MappingSaleFulfillmentVariant[];

  @OneToMany(() => MappingSku, (mappingSku) => mappingSku.product)
  mappingSkus: MappingSku[];

  @OneToMany(() => MappingVariant, (mappingVariant) => mappingVariant.destinationProduct)
  mappingVariants: MappingVariant[];

  @OneToMany(() => MappingVariant, (mappingVariant) => mappingVariant.sourceProduct)
  mappingVariants2: MappingVariant[];

  @OneToMany(() => MappingVariantRatio, (mappingVariantRatio) => mappingVariantRatio.destinationProduct)
  mappingVariantRatios: MappingVariantRatio[];

  @OneToMany(() => MappingVariantRatio, (mappingVariantRatio) => mappingVariantRatio.sourceProduct)
  mappingVariantRatios2: MappingVariantRatio[];

  @OneToMany(() => PendingDistribution, (pendingDistribution) => pendingDistribution.product)
  pendingDistributions: PendingDistribution[];

  @OneToMany(() => PlanDaysToSale, (planDaysToSale) => planDaysToSale.product)
  planDaysToSales: PlanDaysToSale[];

  @ManyToOne(() => TariffConfig, (tariffConfig) => tariffConfig.products, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'tariff_config_id', referencedColumnName: 'id' }])
  tariffConfig: TariffConfig;

  @OneToMany(() => ProductSupplier, (productSupplier) => productSupplier.product)
  productSuppliers: ProductSupplier[];

  @OneToMany(() => ProductionLeadTime, (productionLeadTime) => productionLeadTime.product)
  productionLeadTimes: ProductionLeadTime[];

  @OneToMany(() => SaleForecast, (saleForecast) => saleForecast.product)
  saleForecasts: SaleForecast[];

  @OneToMany(() => TariffConfigProductHistory, (tariffConfigProductHistory) => tariffConfigProductHistory.product)
  tariffConfigProductHistories: TariffConfigProductHistory[];

  //   @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant[];
}
