import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';

@Index('PK_term', ['id'], { unique: true })
@Index('IX_term_supplier_id', ['supplierId'], {})
@Entity('term', { schema: 'public' })
export class Term {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'version' })
  version: number;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.terms, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @OneToMany(() => TermVersion, (termVersion) => termVersion.term)
  termVersions: TermVersion[];
}
