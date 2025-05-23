import { Column, Entity, Index } from 'typeorm';

@Index('stats_do_sold_day_core_variant_id_idx', ['coreVariantId'], {})
@Index('stats_do_sold_day_created_idx', ['created'], {})
@Index('PK_stats_do_sold_day', ['id'], { unique: true })
@Index('stats_do_sold_day_page_id_idx', ['pageId'], {})
@Index('stats_do_sold_day_product_code_idx', ['productCode'], {})
@Index('IX_stats_do_sold_day_time_product_id', ['productId', 'time'], {})
@Index('stats_do_sold_day_time_idx', ['time'], {})
@Index('stats_do_sold_day_variant_id_idx', ['variantId'], {})
@Entity('stats_do_sold_day', { schema: 'public' })
export class StatsDoSoldDay {
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

  @Column('timestamp without time zone', { name: 'time' })
  time: Date;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('integer', { name: 'stats_do' })
  statsDo: number;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('integer', { name: 'page_version', nullable: true })
  pageVersion: number | null;

  @Column('text', { name: 'page_id', nullable: true })
  pageId: string | null;

  @Column('integer', { name: 'stats_odo', default: () => '0' })
  statsOdo: number;

  @Column('text', { name: 'core_variant_id', nullable: true })
  coreVariantId: string | null;
}
