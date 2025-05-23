import { Column, Entity, Index } from 'typeorm';

@Index('PK_product_page', ['id'], { unique: true })
@Entity('product_page', { schema: 'public' })
export class ProductPage {
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

  @Column('integer', { name: 'page_version', nullable: true })
  pageVersion: number | null;

  @Column('text', { name: 'domain', nullable: true })
  domain: string | null;

  @Column('text', { name: 'slug', nullable: true })
  slug: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'pbase_id', nullable: true })
  pbaseId: string | null;

  @Column('text', { name: 'ppage_id', nullable: true })
  ppageId: string | null;

  @Column('text', { name: 'page_id', nullable: true })
  pageId: string | null;

  @Column('text', { name: 'page_title', nullable: true })
  pageTitle: string | null;
}
