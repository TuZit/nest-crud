import { Column, Entity } from 'typeorm';

@Entity('ds_scm_contract_variant_price', { schema: 'public' })
export class DsScmContractVariantPrice {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('text', { name: 'carrier_price_id', nullable: true })
  carrierPriceId: string | null;

  @Column('text', { name: 'contract_id', nullable: true })
  contractId: string | null;

  @Column('text', { name: 'contract_code', nullable: true })
  contractCode: string | null;

  @Column('text', { name: 'contract_status', nullable: true })
  contractStatus: string | null;

  @Column('timestamp without time zone', {
    name: 'request_date',
    nullable: true
  })
  requestDate: Date | null;

  @Column('timestamp without time zone', {
    name: 'activated_date',
    nullable: true
  })
  activatedDate: Date | null;

  @Column('timestamp without time zone', { name: 'end_date', nullable: true })
  endDate: Date | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_label', nullable: true })
  productLabel: string | null;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_code', nullable: true })
  variantCode: string | null;

  @Column('text', { name: 'variant_name', nullable: true })
  variantName: string | null;

  @Column('text', { name: 'property1', nullable: true })
  property1: string | null;

  @Column('text', { name: 'property2', nullable: true })
  property2: string | null;

  @Column('text', { name: 'property3', nullable: true })
  property3: string | null;

  @Column('text', { name: 'property4', nullable: true })
  property4: string | null;

  @Column('text', { name: 'carrier', nullable: true })
  carrier: string | null;

  @Column('numeric', { name: 'weight', nullable: true })
  weight: string | null;

  @Column('numeric', { name: 'carrier_shipping_cost', nullable: true })
  carrierShippingCost: string | null;

  @Column('numeric', { name: 'product_cost', nullable: true })
  productCost: string | null;

  @Column('numeric', { name: 'packing_cost', nullable: true })
  packingCost: string | null;

  @Column('numeric', { name: 'shipping_cost', nullable: true })
  shippingCost: string | null;

  @Column('integer', { name: 'set', nullable: true })
  set: number | null;

  @Column('text', { name: 'specific_item', nullable: true })
  specificItem: string | null;
}
