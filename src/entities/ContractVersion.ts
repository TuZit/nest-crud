import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ContractHistory } from './ContractHistory';
import { ContractQuantity } from './ContractQuantity';
import { ContractVariant } from './ContractVariant';
import { Contract } from './Contract';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { TariffConfig } from './TariffConfig';
import { ContractVersionFfmvVersion } from './ContractVersionFfmvVersion';
import { DistributionDaily } from './DistributionDaily';
import { Do } from './Do';
import { Do2 } from './Do2';
import { DoCopy1 } from './DoCopy1';
import { DynamicPrice } from './DynamicPrice';
import { FulfillmentScore } from './FulfillmentScore';
import { Inventory } from './Inventory';
import { MixedPrice } from './MixedPrice';

@Index('IX_contract_version_contract_id', ['contractId'], {})
@Index('IX_contract_version_fulfillment_variant_version_id', ['fulfillmentVariantVersionId'], {})
@Index('PK_contract_version', ['id'], { unique: true })
@Index('IX_contract_version_tariff_config_id', ['tariffConfigId'], {})
@Entity('contract_version', { schema: 'public' })
export class ContractVersion {
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

  @Column('integer', { name: 'version' })
  version: number;

  @Column('text', { name: 'status' })
  status: string;

  @Column('integer', { name: 'capacity' })
  capacity: number;

  @Column('timestamp without time zone', { name: 'ended', nullable: true })
  ended: Date | null;

  @Column('text', { name: 'contract_id', nullable: true })
  contractId: string | null;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'dynamic_pc', nullable: true })
  dynamicPc: string | null;

  @Column('boolean', { name: 'is_core_variant', nullable: true })
  isCoreVariant: boolean | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('integer', { name: 'priority', nullable: true })
  priority: number | null;

  @Column('integer', { name: 'ratio', nullable: true })
  ratio: number | null;

  @Column('boolean', { name: 'is_multiple_ffmv_version', nullable: true })
  isMultipleFfmvVersion: boolean | null;

  @Column('text', { name: 'tariff_config_id', nullable: true })
  tariffConfigId: string | null;

  @Column('jsonb', { name: 'tariff_history', nullable: true })
  tariffHistory: object | null;

  @Column('boolean', { name: 'is_crossian_shipping_line', nullable: true })
  isCrossianShippingLine: boolean | null;

  @OneToMany(() => ContractHistory, (contractHistory) => contractHistory.contractVersion)
  contractHistories: ContractHistory[];

  @OneToMany(() => ContractQuantity, (contractQuantity) => contractQuantity.contractVersion)
  contractQuantities: ContractQuantity[];

  @OneToMany(() => ContractVariant, (contractVariant) => contractVariant.contract)
  contractVariants: ContractVariant[];

  @ManyToOne(() => Contract, (contract) => contract.contractVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_id', referencedColumnName: 'id' }])
  contract: Contract;

  @ManyToOne(
    () => FulfillmentVariantVersion,
    (fulfillmentVariantVersion) => fulfillmentVariantVersion.contractVersions,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'fulfillment_variant_version_id', referencedColumnName: 'id' }])
  fulfillmentVariantVersion: FulfillmentVariantVersion;

  @ManyToOne(() => TariffConfig, (tariffConfig) => tariffConfig.contractVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'tariff_config_id', referencedColumnName: 'id' }])
  tariffConfig: TariffConfig;

  @OneToMany(
    () => ContractVersionFfmvVersion,
    (contractVersionFfmvVersion) => contractVersionFfmvVersion.contractVersion
  )
  contractVersionFfmvVersions: ContractVersionFfmvVersion[];

  @OneToMany(() => DistributionDaily, (distributionDaily) => distributionDaily.contractVersion)
  distributionDailies: DistributionDaily[];

  // @OneToMany(()=>Do,do=>do.contractVersion)

  dos: Do[];

  @OneToMany(() => Do2, (do2) => do2.contractVersion)
  dos2: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.contractVersion)
  doCopies: DoCopy1[];

  @OneToMany(() => DynamicPrice, (dynamicPrice) => dynamicPrice.contractVersion)
  dynamicPrices: DynamicPrice[];

  @OneToMany(() => FulfillmentScore, (fulfillmentScore) => fulfillmentScore.contractVersion)
  fulfillmentScores: FulfillmentScore[];

  @OneToMany(() => Inventory, (inventory) => inventory.contractVersion)
  inventories: Inventory[];

  //   @OneToMany(() => MixedPrice, (mixedPrice) => mixedPrice.contractVersion)
  mixedPrices: MixedPrice[];
}
