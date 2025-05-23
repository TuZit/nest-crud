import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractVersion } from './ContractVersion';

@Index('IX_contract_history_contract_version_id', ['contractVersionId'], {})
@Index('PK_contract_history', ['id'], { unique: true })
@Entity('contract_history', { schema: 'public' })
export class ContractHistory {
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

  @Column('text', { name: 'action' })
  action: string;

  @Column('text', { name: 'contract_version_id', nullable: true })
  contractVersionId: string | null;

  @Column('jsonb', { name: 'account', nullable: true })
  account: object | null;

  @ManyToOne(() => ContractVersion, (contractVersion) => contractVersion.contractHistories, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_version_id', referencedColumnName: 'id' }])
  contractVersion: ContractVersion;
}
