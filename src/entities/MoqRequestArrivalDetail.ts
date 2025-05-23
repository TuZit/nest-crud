import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_request_arrival_detail', ['id'], { unique: true })
@Index('idx_moq_request_arrival_detail_variant_id', ['variantId'], {})
@Entity('moq_request_arrival_detail', { schema: 'public' })
export class MoqRequestArrivalDetail {
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

  @Column('text', { name: 'moq_arrival_id', nullable: true })
  moqArrivalId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_sku', nullable: true })
  variantSku: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('integer', { name: 'excess_quantity', nullable: true })
  excessQuantity: number | null;
}
