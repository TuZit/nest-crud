import { Column, Entity, Index } from 'typeorm';

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

  contracts: any[];

  contractQuantities: any[];

  contractVersionFfmvVersions: any[];

  distributions: any[];

  distributionDailies: any[];

  // @OneToMany(()=>Do,do=>do.product_2)

  dos: any[];

  dos2: any[];

  doCopies: any[];

  dynamicPrices: any[];

  fulfillmentScores: any[];

  fulfillmentVariantVersions: any[];

  inventories: any[];

  inventoryPurchases: any[];

  inventoryRequests: any[];

  inventoryRequestDetails: any[];

  mappingCoreVariants: any[];

  mappingSaleFulfillmentVariants: any[];

  mappingSkus: any[];

  mappingVariants: any[];

  mappingVariants2: any[];

  mappingVariantRatios: any[];

  mappingVariantRatios2: any[];

  pendingDistributions: any[];

  planDaysToSales: any[];

  tariffConfig: any;

  productSuppliers: any[];

  productionLeadTimes: any[];

  saleForecasts: any[];

  tariffConfigProductHistories: any[];

  variants: any[];
}
