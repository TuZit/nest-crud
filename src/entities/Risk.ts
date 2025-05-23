import { Column, Entity, Index, JoinColumn } from 'typeorm';
import { Supplier } from './Supplier';
import { TermVersion } from './TermVersion';

@Index('PK_risk', ['id'], { unique: true })
@Index('IX_risk_supplier_id', ['supplierId'], {})
@Index('IX_risk_term_version_id', ['termVersionId'], {})
@Entity('risk', { schema: 'public' })
export class Risk {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('timestamp without time zone', { name: 'started' })
  started: Date;

  @Column('timestamp without time zone', { name: 'ended', nullable: true })
  ended: Date | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('double precision', { name: 'percent', precision: 53 })
  percent: number;

  @Column('numeric', { name: 'charge_amount' })
  chargeAmount: string;

  @Column('text', { name: 'term_version_id', nullable: true })
  termVersionId: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('double precision', { name: 'sls', precision: 53 })
  sls: number;

  @Column('double precision', { name: 'srr', precision: 53 })
  srr: number;

  @Column('double precision', { name: 'srs', precision: 53 })
  srs: number;

  @Column('double precision', { name: 'trr', precision: 53 })
  trr: number;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  // @ManyToOne(() => Supplier, (supplier) => supplier.risks, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  // @ManyToOne(() => TermVersion, (termVersion) => termVersion.risks, {
  //   onDelete: 'RESTRICT'
  // })
  @JoinColumn([{ name: 'term_version_id', referencedColumnName: 'id' }])
  termVersion: TermVersion;
}
