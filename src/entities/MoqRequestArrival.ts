import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_request_arrival', ['id'], { unique: true })
@Index('idx_moq_request_arrival_supplier_id', ['supplierId'], {})
@Entity('moq_request_arrival', { schema: 'public' })
export class MoqRequestArrival {
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

  @Column('timestamp without time zone', { name: 'arrival_date' })
  arrivalDate: Date;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'factory_code', nullable: true })
  factoryCode: string | null;

  @Column('integer', { name: 'total_quantity' })
  totalQuantity: number;

  @Column('text', { name: 'url_file', nullable: true })
  urlFile: string | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'cancel_reason', nullable: true })
  cancelReason: string | null;

  @Column('text', { name: 'type', default: () => "''" })
  type: string;

  @Column('text', { name: 'note', nullable: true })
  note: string | null;

  @Column('boolean', { name: 'not_allow_filling', nullable: true })
  notAllowFilling: boolean | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;
}
