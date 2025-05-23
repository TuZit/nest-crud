import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';

@Index('PK_release', ['id'], { unique: true })
@Index('IX_release_supplier_id', ['supplierId'], {})
@Index('IX_release_term_version_id', ['termVersionId'], {})
@Entity('release', { schema: 'public' })
export class Release {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'do_id', nullable: true })
  doId: string | null;

  @Column('text', { name: 'term_version_id', nullable: true })
  termVersionId: string | null;

  @Column('double precision', { name: 'escrow', precision: 53 })
  escrow: number;

  @Column('double precision', { name: 'amount', precision: 53 })
  amount: number;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('double precision', { name: 'release_canceled', precision: 53 })
  releaseCanceled: number;

  @Column('double precision', { name: 'release_incomplete', precision: 53 })
  releaseIncomplete: number;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  // @ManyToOne(() => Supplier, (supplier) => supplier.releases, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => TermVersion, (termVersion) => termVersion.releases, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'term_version_id', referencedColumnName: 'id' }])
  termVersion: TermVersion;
}
