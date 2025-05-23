import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_reconcile_detail', ['id'], { unique: true })
@Entity('moq_reconcile_detail', { schema: 'public' })
export class MoqReconcileDetail {
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

  @Column('text', { name: 'reconcile_version_code', nullable: true })
  reconcileVersionCode: string | null;

  @Column('text', { name: 'moq_request_id', nullable: true })
  moqRequestId: string | null;

  @Column('text', { name: 'moq_request_code', nullable: true })
  moqRequestCode: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_sku', nullable: true })
  variantSku: string | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;
}
