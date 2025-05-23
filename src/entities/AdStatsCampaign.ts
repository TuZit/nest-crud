import { Column, Entity, Index } from 'typeorm';

@Index('ad_stats_campaign_pk', ['id'], { unique: true })
@Entity('ad_stats_campaign', { schema: 'public' })
export class AdStatsCampaign {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'time', nullable: true })
  time: Date | null;

  @Column('text', { name: 'token_id', nullable: true })
  tokenId: string | null;

  @Column('text', { name: 'provider', nullable: true })
  provider: string | null;

  @Column('text', { name: 'account_id', nullable: true })
  accountId: string | null;

  @Column('text', { name: 'account_name', nullable: true })
  accountName: string | null;

  @Column('text', { name: 'campaign_id', nullable: true })
  campaignId: string | null;

  @Column('text', { name: 'campaign_name', nullable: true })
  campaignName: string | null;

  @Column('text', { name: 'cta_url', nullable: true })
  ctaUrl: string | null;

  @Column('text', { name: 'cta_url_domain', nullable: true })
  ctaUrlDomain: string | null;

  @Column('text', { name: 'cta_url_slug', nullable: true })
  ctaUrlSlug: string | null;

  @Column('text', { name: 'publisher_id', nullable: true })
  publisherId: string | null;

  @Column('text', { name: 'page_id', nullable: true })
  pageId: string | null;

  @Column('text', { name: 'store_id', nullable: true })
  storeId: string | null;

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
    name: 'stats_budget',
    nullable: true,
    precision: 53
  })
  statsBudget: number | null;

  @Column('double precision', {
    name: 'stats_spend',
    nullable: true,
    precision: 53
  })
  statsSpend: number | null;

  @Column('integer', { name: 'stats_impression', nullable: true })
  statsImpression: number | null;

  @Column('double precision', {
    name: 'stats_roas',
    nullable: true,
    precision: 53
  })
  statsRoas: number | null;

  @Column('double precision', {
    name: 'stats_cpm',
    nullable: true,
    precision: 53
  })
  statsCpm: number | null;

  @Column('double precision', {
    name: 'stats_ctr',
    nullable: true,
    precision: 53
  })
  statsCtr: number | null;

  @Column('integer', { name: 'stats_click', nullable: true })
  statsClick: number | null;

  @Column('double precision', {
    name: 'stats_cpc',
    nullable: true,
    precision: 53
  })
  statsCpc: number | null;

  @Column('integer', { name: 'stats_view', nullable: true })
  statsView: number | null;

  @Column('double precision', {
    name: 'stats_cp_view',
    nullable: true,
    precision: 53
  })
  statsCpView: number | null;

  @Column('integer', { name: 'stats_addtocart', nullable: true })
  statsAddtocart: number | null;

  @Column('double precision', {
    name: 'stats_cp_addtocart',
    nullable: true,
    precision: 53
  })
  statsCpAddtocart: number | null;

  @Column('integer', { name: 'stats_initcheckout', nullable: true })
  statsInitcheckout: number | null;

  @Column('double precision', {
    name: 'stats_cp_initcheckout',
    nullable: true,
    precision: 53
  })
  statsCpInitcheckout: number | null;

  @Column('integer', { name: 'stats_checkout', nullable: true })
  statsCheckout: number | null;

  @Column('double precision', {
    name: 'stats_cp_checkout',
    nullable: true,
    precision: 53
  })
  statsCpCheckout: number | null;

  @Column('integer', { name: 'stats_purchase', nullable: true })
  statsPurchase: number | null;

  @Column('double precision', {
    name: 'stats_cpp',
    nullable: true,
    precision: 53
  })
  statsCpp: number | null;

  @Column('double precision', {
    name: 'stats_revenue',
    nullable: true,
    precision: 53
  })
  statsRevenue: number | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'account_currency', nullable: true })
  accountCurrency: string | null;

  @Column('double precision', {
    name: 'stats_spend_original',
    nullable: true,
    precision: 53
  })
  statsSpendOriginal: number | null;

  @Column('text', { name: 'publisher_ads_email', nullable: true })
  publisherAdsEmail: string | null;

  @Column('text', { name: 'publisher_ads_id', nullable: true })
  publisherAdsId: string | null;

  @Column('text', { name: 'publisher_ads_type', nullable: true })
  publisherAdsType: string | null;

  @Column('text', { name: 'publisher_ads_team', nullable: true })
  publisherAdsTeam: string | null;

  @Column('text', { name: 'publisher_team', nullable: true })
  publisherTeam: string | null;
}
