import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ContractVersionFfmvVersion } from './ContractVersionFfmvVersion';
import { DistributionDaily } from './DistributionDaily';
import { Do } from './Do';
import { FulfillmentScore } from './FulfillmentScore';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { InventoryDelivery } from './InventoryDelivery';
import { InventoryPurchase } from './InventoryPurchase';

@Index('PK_factory', ['id'], { unique: true })
@Entity('factory', { schema: 'public' })
export class Factory {
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

  @Column('text', { name: 'status' })
  status: string;

  @Column('jsonb', { name: 'business', nullable: true })
  business: object | null;

  @Column('text', { name: 'company_name', nullable: true })
  companyName: string | null;

  @Column('jsonb', { name: 'contacts', nullable: true })
  contacts: object | null;

  @Column('jsonb', { name: 'payment', nullable: true })
  payment: object | null;

  @Column('jsonb', { name: 'warehouse', nullable: true })
  warehouse: object | null;

  @OneToMany(() => ContractVersionFfmvVersion, (contractVersionFfmvVersion) => contractVersionFfmvVersion.factory)
  contractVersionFfmvVersions: ContractVersionFfmvVersion[];

  @OneToMany(() => DistributionDaily, (distributionDaily) => distributionDaily.factory)
  distributionDailies: DistributionDaily[];

  // @OneToMany(()=>Do,do=>do.factory)

  dos: Do[];

  @OneToMany(() => FulfillmentScore, (fulfillmentScore) => fulfillmentScore.factory)
  fulfillmentScores: FulfillmentScore[];

  //   @OneToMany(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.factory)
  fulfillmentVariantVersions: FulfillmentVariantVersion[];

  @OneToMany(() => InventoryDelivery, (inventoryDelivery) => inventoryDelivery.factory)
  inventoryDeliveries: InventoryDelivery[];

  @OneToMany(() => InventoryPurchase, (inventoryPurchase) => inventoryPurchase.factory)
  inventoryPurchases: InventoryPurchase[];
}
