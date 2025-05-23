import { Column, Entity } from 'typeorm';

@Entity('scm_contract_version', { schema: 'public' })
export class ScmContractVersion {
  @Column('text', { name: 'id', nullable: true })
  id: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'version', nullable: true })
  version: number | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('integer', { name: 'capacity', nullable: true })
  capacity: number | null;

  @Column('timestamp without time zone', { name: 'ended', nullable: true })
  ended: Date | null;

  @Column('text', { name: 'contract_id', nullable: true })
  contractId: string | null;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'dynamic_pc', nullable: true })
  dynamicPc: string | null;

  @Column('boolean', { name: 'is_core_variant', nullable: true })
  isCoreVariant: boolean | null;
}
