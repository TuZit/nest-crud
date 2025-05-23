import { Column, Entity, Index } from 'typeorm';

@Index('scm_po_pkey', ['id'], { unique: true })
@Entity('scm_po', { schema: 'public' })
export class ScmPo {
  @Column('character varying', { primary: true, name: 'id', length: 255 })
  id: string;

  @Column('time without time zone', { name: 'created', nullable: true })
  created: string | null;

  @Column('character varying', {
    name: 'created_by',
    nullable: true,
    length: 255
  })
  createdBy: string | null;

  @Column('time without time zone', { name: 'updated', nullable: true })
  updated: string | null;

  @Column('character varying', {
    name: 'updated_by',
    nullable: true,
    length: 255
  })
  updatedBy: string | null;

  @Column('character varying', { name: 'code', nullable: true, length: 255 })
  code: string | null;

  @Column('character varying', {
    name: 'source_url_domain',
    nullable: true,
    length: 255
  })
  sourceUrlDomain: string | null;

  @Column('character varying', {
    name: 'source_url_slug',
    nullable: true,
    length: 255
  })
  sourceUrlSlug: string | null;

  @Column('character varying', {
    name: 'product_code',
    nullable: true,
    length: 255
  })
  productCode: string | null;

  @Column('character varying', {
    name: 'product_id',
    nullable: true,
    length: 255
  })
  productId: string | null;

  @Column('double precision', { name: 'amount', nullable: true, precision: 53 })
  amount: number | null;

  @Column('double precision', {
    name: 'tax_amount',
    nullable: true,
    precision: 53
  })
  taxAmount: number | null;

  @Column('integer', { name: 'page_version', nullable: true })
  pageVersion: number | null;

  @Column('character varying', { name: 'page_id', nullable: true, length: 255 })
  pageId: string | null;

  @Column('character varying', {
    name: 'pbase_id',
    nullable: true,
    length: 255
  })
  pbaseId: string | null;

  @Column('character varying', {
    name: 'ppage_id',
    nullable: true,
    length: 255
  })
  ppageId: string | null;

  @Column('character varying', {
    name: 'page_title',
    nullable: true,
    length: 255
  })
  pageTitle: string | null;
}
