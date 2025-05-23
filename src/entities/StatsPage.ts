import { Column, Entity, Index } from 'typeorm';

@Index('stats_page_pk', ['id'], { unique: true })
@Entity('stats_page', { schema: 'public' })
export class StatsPage {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('timestamp without time zone', { name: 'time', nullable: true })
  time: Date | null;

  @Column('integer', { name: 'stats_po', nullable: true })
  statsPo: number | null;

  @Column('double precision', {
    name: 'stats_amount',
    nullable: true,
    precision: 53
  })
  statsAmount: number | null;

  @Column('double precision', {
    name: 'stats_items_amount',
    nullable: true,
    precision: 53
  })
  statsItemsAmount: number | null;

  @Column('double precision', {
    name: 'stats_shipping_amount',
    nullable: true,
    precision: 53
  })
  statsShippingAmount: number | null;

  @Column('double precision', {
    name: 'stats_discount_amount',
    nullable: true,
    precision: 53
  })
  statsDiscountAmount: number | null;

  @Column('double precision', {
    name: 'stats_cost_product',
    nullable: true,
    precision: 53
  })
  statsCostProduct: number | null;

  @Column('double precision', {
    name: 'stats_cost_fulfillment',
    nullable: true,
    precision: 53
  })
  statsCostFulfillment: number | null;

  @Column('double precision', {
    name: 'stats_cost_total',
    nullable: true,
    precision: 53
  })
  statsCostTotal: number | null;

  @Column('double precision', {
    name: 'stats_fee_abandoned',
    nullable: true,
    precision: 53
  })
  statsFeeAbandoned: number | null;

  @Column('double precision', {
    name: 'stats_fee_payment',
    nullable: true,
    precision: 53
  })
  statsFeePayment: number | null;

  @Column('double precision', {
    name: 'stats_fee_selless',
    nullable: true,
    precision: 53
  })
  statsFeeSelless: number | null;

  @Column('double precision', {
    name: 'stats_hold_amount',
    nullable: true,
    precision: 53
  })
  statsHoldAmount: number | null;

  @Column('double precision', {
    name: 'stats_taken_amount',
    nullable: true,
    precision: 53
  })
  statsTakenAmount: number | null;

  @Column('text', { name: 'cta_url', nullable: true })
  ctaUrl: string | null;

  @Column('text', { name: 'cta_url_domain', nullable: true })
  ctaUrlDomain: string | null;

  @Column('text', { name: 'cta_url_slug', nullable: true })
  ctaUrlSlug: string | null;

  @Column('text', { name: 'publisher_id', nullable: true })
  publisherId: string | null;

  @Column('text', { name: 'publisher_type', nullable: true })
  publisherType: string | null;

  @Column('text', { name: 'publisher_email', nullable: true })
  publisherEmail: string | null;

  @Column('text', { name: 'paypalex_id', nullable: true })
  paypalexId: string | null;

  @Column('text', { name: 'paypalex_name', nullable: true })
  paypalexName: string | null;

  @Column('text', { name: 'creditcard_id', nullable: true })
  creditcardId: string | null;

  @Column('text', { name: 'creditcard_name', nullable: true })
  creditcardName: string | null;

  @Column('text', { name: 'store_id', nullable: true })
  storeId: string | null;

  @Column('integer', { name: 'store_code', nullable: true })
  storeCode: number | null;

  @Column('text', { name: 'store_page_id', nullable: true })
  storePageId: string | null;

  @Column('bigint', { name: 'store_page_code', nullable: true })
  storePageCode: string | null;

  @Column('text', { name: 'pbase_id', nullable: true })
  pbaseId: string | null;

  @Column('text', { name: 'pbase_code', nullable: true })
  pbaseCode: string | null;

  @Column('text', { name: 'pbase_family', nullable: true })
  pbaseFamily: string | null;

  @Column('text', { name: 'pbase_line', nullable: true })
  pbaseLine: string | null;

  @Column('text', { name: 'ppage_id', nullable: true })
  ppageId: string | null;

  @Column('text', { name: 'ppage_code', nullable: true })
  ppageCode: string | null;

  @Column('text', { name: 'ppage_family', nullable: true })
  ppageFamily: string | null;

  @Column('double precision', {
    name: 'stats_cashtobalance',
    nullable: true,
    precision: 53
  })
  statsCashtobalance: number | null;

  @Column('double precision', {
    name: 'stats_hold',
    nullable: true,
    precision: 53
  })
  statsHold: number | null;

  @Column('double precision', {
    name: 'stats_unhold',
    nullable: true,
    precision: 53
  })
  statsUnhold: number | null;

  @Column('double precision', {
    name: 'stats_youtake',
    nullable: true,
    precision: 53
  })
  statsYoutake: number | null;

  @Column('double precision', {
    name: 'stats_tax_amount',
    nullable: true,
    precision: 53
  })
  statsTaxAmount: number | null;

  @Column('double precision', {
    name: 'stats_cost_fulfillment_final',
    nullable: true,
    precision: 53
  })
  statsCostFulfillmentFinal: number | null;

  @Column('double precision', {
    name: 'stats_cost_fulfillment_origin',
    nullable: true,
    precision: 53
  })
  statsCostFulfillmentOrigin: number | null;

  @Column('double precision', {
    name: 'stats_cost_product_final',
    nullable: true,
    precision: 53
  })
  statsCostProductFinal: number | null;

  @Column('double precision', {
    name: 'stats_cost_product_origin',
    nullable: true,
    precision: 53
  })
  statsCostProductOrigin: number | null;

  @Column('double precision', {
    name: 'stats_cost_total_final',
    nullable: true,
    precision: 53
  })
  statsCostTotalFinal: number | null;

  @Column('double precision', {
    name: 'stats_cost_total_origin',
    nullable: true,
    precision: 53
  })
  statsCostTotalOrigin: number | null;

  @Column('text', { name: 'ads_source', nullable: true })
  adsSource: string | null;

  @Column('text', { name: 'publisher_team', nullable: true })
  publisherTeam: string | null;
}
