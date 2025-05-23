import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Do } from './Do';
import { Do2 } from './Do2';
import { DoCopy1 } from './DoCopy1';
import { Release } from './Release';
import { Risk } from './Risk';
import { Term } from './Term';

@Index('PK_term_version', ['id'], { unique: true })
@Index('IX_term_version_term_id', ['termId'], {})
@Entity('term_version', { schema: 'public' })
export class TermVersion {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'term_id', nullable: true })
  termId: string | null;

  @Column('integer', { name: 'version' })
  version: number;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('timestamp without time zone', { name: 'ended' })
  ended: Date;

  @Column('jsonb', { name: 'shipping', nullable: true })
  shipping: object | null;

  @Column('jsonb', { name: 'payment', nullable: true })
  payment: object | null;

  @Column('jsonb', { name: 'risk', nullable: true })
  risk: object | null;

  @Column('jsonb', { name: 'alert_timeline', nullable: true })
  alertTimeline: object | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  // @OneToMany(()=>Do,do=>do.termVersion)

  dos: Do[];

  @OneToMany(() => Do2, (do2) => do2.termVersion)
  dos2: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.termVersion)
  doCopies: DoCopy1[];

  @OneToMany(() => Release, (release) => release.termVersion)
  releases: Release[];

  @OneToMany(() => Risk, (risk) => risk.termVersion)
  risks: Risk[];

  @ManyToOne(() => Term, (term) => term.termVersions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'term_id', referencedColumnName: 'id' }])
  term: Term;
}
