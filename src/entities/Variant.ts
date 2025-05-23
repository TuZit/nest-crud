import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ContractVariant } from './ContractVariant';
import { Do } from './Do';
import { Do2 } from './Do2';
import { DoCopy1 } from './DoCopy1';
import { FulfillmentVariantFulfillmentVersion } from './FulfillmentVariantFulfillmentVersion';
import { Inventory } from './Inventory';
import { InventoryDeliveryDetail } from './InventoryDeliveryDetail';
import { InventoryPurchaseDetail } from './InventoryPurchaseDetail';
import { InventoryRequestDetail } from './InventoryRequestDetail';
import { MappingCoreVariant } from './MappingCoreVariant';
import { MappingSaleFulfillmentVariant } from './MappingSaleFulfillmentVariant';
import { MappingSku } from './MappingSku';
import { MappingVariant } from './MappingVariant';
import { MappingVariantRatio } from './MappingVariantRatio';
import { PendingDistribution } from './PendingDistribution';
import { PlanDaysToSale } from './PlanDaysToSale';
import { ProductionLeadTime } from './ProductionLeadTime';
import { Product } from './Product';
import { SaleVariantVersion } from './SaleVariantVersion';
import { VariantIngredient } from './VariantIngredient';
import { VariantSupplier } from './VariantSupplier';

@Index('variant_code_idx', ['code'], {})
@Index('PK_variant', ['id'], { unique: true })
@Index('variant_is_core_idx', ['isCore'], {})
@Index('IX_variant_product_id', ['productId'], {})
@Index('IX_variant_sale_version_id', ['saleVersionId'], {})
@Entity('variant', { schema: 'public' })
export class Variant {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'image_uri', nullable: true })
  imageUri: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'contract_form', nullable: true })
  contractForm: string | null;

  @Column('text', { name: 'variation_type', nullable: true })
  variationType: string | null;

  @Column('boolean', { name: 'is_core', nullable: true })
  isCore: boolean | null;

  @Column('text', { name: 'core_status', nullable: true })
  coreStatus: string | null;

  @Column('boolean', { name: 'is_moq', nullable: true })
  isMoq: boolean | null;

  @Column('jsonb', { name: 'not_show', nullable: true })
  notShow: object | null;

  @Column('text', { name: 'fulfillment_variant_version_origin_id', nullable: true })
  fulfillmentVariantVersionOriginId: string | null;

  @Column('text', { name: 'origin_variant_id', nullable: true })
  originVariantId: string | null;

  @Column('text', { name: 'sale_version_id', nullable: true })
  saleVersionId: string | null;

  @OneToMany(() => ContractVariant, (contractVariant) => contractVariant.variant)
  contractVariants: ContractVariant[];

  // @OneToMany(()=>Do,do=>do.coreVariant)

  dos: Do[];

  // @OneToMany(()=>Do,do=>do.variant_2)

  dos2: Do[];

  @OneToMany(() => Do2, (do2) => do2.variant)
  dos3: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.variant)
  doCopies: DoCopy1[];

  @OneToMany(
    () => FulfillmentVariantFulfillmentVersion,
    (fulfillmentVariantFulfillmentVersion) => fulfillmentVariantFulfillmentVersion.fulfillmentVariant
  )
  fulfillmentVariantFulfillmentVersions: FulfillmentVariantFulfillmentVersion[];

  @OneToMany(() => Inventory, (inventory) => inventory.variant)
  inventories: Inventory[];

  @OneToMany(() => InventoryDeliveryDetail, (inventoryDeliveryDetail) => inventoryDeliveryDetail.variant)
  inventoryDeliveryDetails: InventoryDeliveryDetail[];

  @OneToMany(() => InventoryPurchaseDetail, (inventoryPurchaseDetail) => inventoryPurchaseDetail.variant)
  inventoryPurchaseDetails: InventoryPurchaseDetail[];

  @OneToMany(() => InventoryRequestDetail, (inventoryRequestDetail) => inventoryRequestDetail.variant)
  inventoryRequestDetails: InventoryRequestDetail[];

  @OneToMany(() => MappingCoreVariant, (mappingCoreVariant) => mappingCoreVariant.basicVariant)
  mappingCoreVariants: MappingCoreVariant[];

  @OneToMany(() => MappingCoreVariant, (mappingCoreVariant) => mappingCoreVariant.coreVariant)
  mappingCoreVariants2: MappingCoreVariant[];

  @OneToMany(
    () => MappingSaleFulfillmentVariant,
    (mappingSaleFulfillmentVariant) => mappingSaleFulfillmentVariant.fulfillmentVariant
  )
  mappingSaleFulfillmentVariants: MappingSaleFulfillmentVariant[];

  @OneToMany(
    () => MappingSaleFulfillmentVariant,
    (mappingSaleFulfillmentVariant) => mappingSaleFulfillmentVariant.saleVariant
  )
  mappingSaleFulfillmentVariants2: MappingSaleFulfillmentVariant[];

  @OneToMany(() => MappingSku, (mappingSku) => mappingSku.variant)
  mappingSkus: MappingSku[];

  @OneToMany(() => MappingVariant, (mappingVariant) => mappingVariant.basicVariant)
  mappingVariants: MappingVariant[];

  @OneToMany(() => MappingVariant, (mappingVariant) => mappingVariant.destinationVariant)
  mappingVariants2: MappingVariant[];

  @OneToMany(() => MappingVariant, (mappingVariant) => mappingVariant.sourceVariant)
  mappingVariants3: MappingVariant[];

  @OneToMany(() => MappingVariantRatio, (mappingVariantRatio) => mappingVariantRatio.basicVariant)
  mappingVariantRatios: MappingVariantRatio[];

  @OneToMany(() => MappingVariantRatio, (mappingVariantRatio) => mappingVariantRatio.coreVariant)
  mappingVariantRatios2: MappingVariantRatio[];

  @OneToMany(() => PendingDistribution, (pendingDistribution) => pendingDistribution.variant)
  pendingDistributions: PendingDistribution[];

  @OneToMany(() => PlanDaysToSale, (planDaysToSale) => planDaysToSale.variant)
  planDaysToSales: PlanDaysToSale[];

  @OneToMany(() => ProductionLeadTime, (productionLeadTime) => productionLeadTime.variant)
  productionLeadTimes: ProductionLeadTime[];

  @ManyToOne(() => Product, (product) => product.variants, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => SaleVariantVersion, (saleVariantVersion) => saleVariantVersion.variants, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'sale_version_id', referencedColumnName: 'id' }])
  saleVersion: SaleVariantVersion;

  @OneToMany(() => VariantIngredient, (variantIngredient) => variantIngredient.ingredientVariant)
  variantIngredients: VariantIngredient[];

  @OneToMany(() => VariantIngredient, (variantIngredient) => variantIngredient.variant)
  variantIngredients2: VariantIngredient[];

  @OneToMany(() => VariantSupplier, (variantSupplier) => variantSupplier.variant)
  variantSuppliers: VariantSupplier[];
}
