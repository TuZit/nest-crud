import { Column, Entity } from 'typeorm';

@Entity('z_stats_do_sold_day', { schema: 'public' })
export class ZStatsDoSoldDay {
  @Column('text', { name: 'id' })
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

  @Column('text', { name: 'core_variant_id', nullable: true })
  coreVariantId: string | null;

  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('jsonb', { name: 'basic_properties', nullable: true })
  basicProperties: object | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;

  @Column('jsonb', { name: 'core_properties', nullable: true })
  coreProperties: object | null;

  @Column('integer', { name: 'stats_odo' })
  statsOdo: number;
}
