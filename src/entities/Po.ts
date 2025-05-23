import { Column, Entity, Index } from 'typeorm';

@Index('po_created_idx', ['created'], {})
@Index('PK_po', ['id'], { unique: true })
@Index('po_product_code_idx', ['productCode'], {})
@Index('po_product_id_idx', ['productId'], {})
@Entity('po', { schema: 'public' })
export class Po {
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'domain', nullable: true })
  domain: string | null;

  @Column('text', { name: 'slug', nullable: true })
  slug: string | null;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('numeric', { name: 'amount' })
  amount: string;

  @Column('numeric', { name: 'tax_amount' })
  taxAmount: string;

  @Column('integer', { name: 'page_version', nullable: true })
  pageVersion: number | null;

  @Column('text', { name: 'page_id', nullable: true })
  pageId: string | null;

  @Column('text', { name: 'pbase_id', nullable: true })
  pbaseId: string | null;

  @Column('text', { name: 'ppage_id', nullable: true })
  ppageId: string | null;

  @Column('text', { name: 'page_title', nullable: true })
  pageTitle: string | null;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;
}
