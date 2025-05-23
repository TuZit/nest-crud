import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';
import { MixedPrice } from './MixedPrice';
import { Variant } from './Variant';

@Index('PK_contract_variant', ['contractId', 'variantId'], { unique: true })
@Index('IX_contract_variant_mixed_price_id', ['mixedPriceId'], {})
@Index('IX_contract_variant_variant_id', ['variantId'], {})
@Entity('contract_variant', { schema: 'public' })
export class ContractVariant {
  @Column('text', { primary: true, name: 'variant_id' })
  variantId: string;

  @Column('text', { primary: true, name: 'contract_id' })
  contractId: string;

  @Column('double precision', { name: 'product_cost', precision: 53 })
  productCost: number;

  @Column('double precision', { name: 'shipping_cost', precision: 53 })
  shippingCost: number;

  @Column('double precision', { name: 'packing_cost', precision: 53 })
  packingCost: number;

  @Column('text', { name: 'carrier', nullable: true })
  carrier: string | null;

  @Column('double precision', { name: 'ratio', precision: 53 })
  ratio: number;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'image_uri', nullable: true })
  imageUri: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'weight', nullable: true })
  weight: number | null;

  @Column('text', { name: 'mixed_price_id', nullable: true })
  mixedPriceId: string | null;

  @Column('double precision', {
    name: 'merchandise_cost_factory',
    nullable: true,
    precision: 53
  })
  merchandiseCostFactory: number | null;

  @Column('text', { name: 'specific_item', nullable: true })
  specificItem: string | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.contractVariants, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'contract_id', referencedColumnName: 'id' }])
  contract: ContractVersion;

  @ManyToOne(() => MixedPrice, (mixedPrice) => mixedPrice.contractVariants, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'mixed_price_id', referencedColumnName: 'id' }])
  mixedPrice: MixedPrice;

  @ManyToOne(() => Variant, (variant) => variant.contractVariants, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'variant_id', referencedColumnName: 'id' }])
  variant: Variant;
}
