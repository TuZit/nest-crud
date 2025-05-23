import { Column, Entity } from 'typeorm';

@Entity('scm_do', { schema: 'public' })
export class ScmDo {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp with time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp with time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'page_id', nullable: true })
  pageId: string | null;

  @Column('integer', { name: 'page_version', nullable: true })
  pageVersion: number | null;

  @Column('timestamp without time zone', { name: 'time', nullable: true })
  time: Date | null;

  @Column('bigint', { name: 'stats_odo', nullable: true })
  statsOdo: string | null;

  @Column('bigint', { name: 'stats_do', nullable: true })
  statsDo: string | null;
}
