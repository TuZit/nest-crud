import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { FulfillmentVariantVersion } from './FulfillmentVariantVersion';
import { Product } from './Product';
import { TariffConfigProductHistory } from './TariffConfigProductHistory';

@Index('PK_tariff_config', ['id'], { unique: true })
@Entity('tariff_config', { schema: 'public' })
export class TariffConfig {
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

  @Column('text', { name: 'hs_code', nullable: true })
  hsCode: string | null;

  @Column('text', { name: 'material_component', nullable: true })
  materialComponent: string | null;

  @Column('text', { name: 'material_fabric', nullable: true })
  materialFabric: string | null;

  @Column('text', { name: 'standard', nullable: true })
  standard: string | null;

  @Column('text', { name: 'first_four_digit_description', nullable: true })
  firstFourDigitDescription: string | null;

  @Column('text', { name: 'next_two_digit_description', nullable: true })
  nextTwoDigitDescription: string | null;

  @Column('text', { name: 'last_two_digit_description', nullable: true })
  lastTwoDigitDescription: string | null;

  @Column('numeric', { name: 'tariff_rate' })
  tariffRate: string;

  @Column('jsonb', { name: 'histories', nullable: true })
  histories: object | null;

  @OneToMany(() => ContractVersion, (contractVersion) => contractVersion.tariffConfig)
  contractVersions: ContractVersion[];

  @OneToMany(() => FulfillmentVariantVersion, (fulfillmentVariantVersion) => fulfillmentVariantVersion.tariffConfig)
  fulfillmentVariantVersions: FulfillmentVariantVersion[];

  @OneToMany(() => Product, (product) => product.tariffConfig)
  products: Product[];

  @OneToMany(() => TariffConfigProductHistory, (tariffConfigProductHistory) => tariffConfigProductHistory.tariffConfig)
  tariffConfigProductHistories: TariffConfigProductHistory[];
}
