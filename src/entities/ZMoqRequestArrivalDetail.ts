import { Column, Entity } from 'typeorm';

@Entity('z_moq_request_arrival_detail', { schema: 'public' })
export class ZMoqRequestArrivalDetail {
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

  @Column('text', { name: 'moq_arrival_id', nullable: true })
  moqArrivalId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('text', { name: 'variant_sku', nullable: true })
  variantSku: string | null;

  @Column('integer', { name: 'quantity', nullable: true })
  quantity: number | null;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('integer', { name: 'excess_quantity', nullable: true })
  excessQuantity: number | null;

  @Column('text', { name: 'variant_name', nullable: true })
  variantName: string | null;

  @Column('jsonb', { name: 'variant_properties', nullable: true })
  variantProperties: object | null;
}
