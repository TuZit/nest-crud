import { Column, Entity, Index } from 'typeorm';

@Index('PK_arrival_moq_request_detail', ['id'], { unique: true })
@Entity('arrival_moq_request_detail', { schema: 'public' })
export class ArrivalMoqRequestDetail {
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

  @Column('text', { name: 'moq_request_detail_id', nullable: true })
  moqRequestDetailId: string | null;

  @Column('text', { name: 'moq_request_arrival_detail_id', nullable: true })
  moqRequestArrivalDetailId: string | null;

  @Column('text', { name: 'moq_request_id', nullable: true })
  moqRequestId: string | null;

  @Column('text', { name: 'moq_request_arival_id', nullable: true })
  moqRequestArivalId: string | null;

  @Column('integer', { name: 'quantity' })
  quantity: number;
}
