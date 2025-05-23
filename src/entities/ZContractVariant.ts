import { Column, Entity } from 'typeorm';

@Entity('z_contract_variant', { schema: 'public' })
export class ZContractVariant {
  @Column('text', { name: 'variant_id' })
  variantId: string;

  @Column('text', { name: 'contract_id' })
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

  @Column('text', { name: 'variant_name', nullable: true })
  variantName: string | null;

  @Column('jsonb', { name: 'variant_properties', nullable: true })
  variantProperties: object | null;
}
