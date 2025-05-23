import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AgreementHistory } from './AgreementHistory';
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
import { Inventory } from './Inventory';
import { InventoryDelivery } from './InventoryDelivery';
import { InventoryPurchase } from './InventoryPurchase';
import { InventoryRequest } from './InventoryRequest';
import { Payout } from './Payout';
import { ProductSupplier } from './ProductSupplier';
import { Release } from './Release';
import { Risk } from './Risk';
import { SummaryFinancial } from './SummaryFinancial';
import { Term } from './Term';
import { VariantSupplier } from './VariantSupplier';

@Index('PK_supplier', ['id'], { unique: true })
@Entity('supplier', { schema: 'public' })
export class Supplier {
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

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('jsonb', { name: 'payment', nullable: true })
  payment: object | null;

  @Column('jsonb', { name: 'business', nullable: true })
  business: object | null;

  @Column('jsonb', { name: 'warehouse', nullable: true })
  warehouse: object | null;

  @Column('timestamp without time zone', { name: 'ended', nullable: true })
  ended: Date | null;

  @Column('jsonb', { name: 'contacts', nullable: true })
  contacts: object | null;

  @Column('double precision', { name: 'scf', precision: 53, default: () => '0.0' })
  scf: number;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;

  @OneToMany(() => AgreementHistory, (agreementHistory) => agreementHistory.supplier)
  agreementHistories: AgreementHistory[];

  @OneToMany(() => Contract, (contract) => contract.supplier)
  contracts: Contract[];

  @OneToMany(() => ContractQuantity, (contractQuantity) => contractQuantity.supplier)
  contractQuantities: ContractQuantity[];

  @OneToMany(() => ContractVersionFfmvVersion, (contractVersionFfmvVersion) => contractVersionFfmvVersion.supplier)
  contractVersionFfmvVersions: ContractVersionFfmvVersion[];

  @OneToMany(() => Distribution, (distribution) => distribution.supplier)
  distributions: Distribution[];

  @OneToMany(() => DistributionDaily, (distributionDaily) => distributionDaily.supplier)
  distributionDailies: DistributionDaily[];

  // @OneToMany(()=>Do,do=>do.supplier)

  dos: Do[];

  @OneToMany(() => Do2, (do2) => do2.supplier)
  dos2: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.supplier)
  doCopies: DoCopy1[];

  @OneToMany(() => DynamicPrice, (dynamicPrice) => dynamicPrice.supplier)
  dynamicPrices: DynamicPrice[];

  @OneToMany(() => FulfillmentScore, (fulfillmentScore) => fulfillmentScore.supplier)
  fulfillmentScores: FulfillmentScore[];

  @OneToMany(() => Inventory, (inventory) => inventory.supplier)
  inventories: Inventory[];

  @OneToMany(() => InventoryDelivery, (inventoryDelivery) => inventoryDelivery.supplier)
  inventoryDeliveries: InventoryDelivery[];

  @OneToMany(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.supplier)
  inventoryPurchases: InventoryPurchase[];

  @OneToMany(() => InventoryRequest, (inventoryRequest) => inventoryRequest.supplier)
  inventoryRequests: InventoryRequest[];

  @OneToMany(() => Payout, (payout) => payout.supplier)
  payouts: Payout[];

  @OneToMany(() => ProductSupplier, (productSupplier) => productSupplier.supplier)
  productSuppliers: ProductSupplier[];

  @OneToMany(() => Release, (release) => release.supplier)
  releases: Release[];

  @OneToMany(() => Risk, (risk) => risk.supplier)
  risks: Risk[];

  @OneToMany(() => SummaryFinancial, (summaryFinancial) => summaryFinancial.supplier)
  summaryFinancials: SummaryFinancial[];

  @OneToMany(() => Term, (term) => term.supplier)
  terms: Term[];

  @OneToMany(() => VariantSupplier, (variantSupplier) => variantSupplier.supplier)
  variantSuppliers: VariantSupplier[];
}
