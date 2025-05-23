import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ContractVariant } from './ContractVariant';
import { Do } from './Do';
import { ContractVersion } from './ContractVersion';

@Index('IX_mixed_price_contract_version_id', ['contractVersionId'], {})
@Index('PK_mixed_price', ['id'], { unique: true })
@Entity('mixed_price', { schema: 'public' })
export class MixedPrice {
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

  @Column('integer', { name: 'origin_product_quantity' })
  originProductQuantity: number;

  @Column('integer', { name: 'additional_product_quantity' })
  additionalProductQuantity: number;

  @Column('numeric', { name: 'product_cost' })
  productCost: string;

  @Column('numeric', { name: 'shipping_cost' })
  shippingCost: string;

  @Column('numeric', { name: 'packing_cost' })
  packingCost: string;

  @Column('text', { name: 'specific_item', nullable: true })
  specificItem: string | null;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('integer', { name: 'additional_product_quantity2', default: () => '0' })
  additionalProductQuantity2: number;

  @OneToMany(() => ContractVariant, (contractVariant) => contractVariant.mixedPrice)
  contractVariants: ContractVariant[];

  // @OneToMany(()=>Do,do=>do.mixedPrice)

  dos: Do[];

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.mixedPrices, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;
}
