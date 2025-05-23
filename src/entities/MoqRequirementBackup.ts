import { Column, Entity } from 'typeorm';

@Entity('moq_requirement_backup', { schema: 'public' })
export class MoqRequirementBackup {
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

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('numeric', { name: 'merchandise_cost', nullable: true })
  merchandiseCost: string | null;

  @Column('integer', { name: 'first_lead_time', nullable: true })
  firstLeadTime: number | null;

  @Column('integer', { name: 'min_lead_time', nullable: true })
  minLeadTime: number | null;

  @Column('integer', { name: 'max_lead_time', nullable: true })
  maxLeadTime: number | null;

  @Column('integer', { name: 'min_moq_quantity', nullable: true })
  minMoqQuantity: number | null;

  @Column('text', { name: 'payment_term', nullable: true })
  paymentTerm: string | null;

  @Column('text', { name: 'arrival_term', nullable: true })
  arrivalTerm: string | null;

  @Column('text', { name: 'clearance_term', nullable: true })
  clearanceTerm: string | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('integer', { name: 'priority', nullable: true })
  priority: number | null;

  @Column('jsonb', { name: 'variants', nullable: true })
  variants: object | null;

  @Column('integer', { name: 'min_quantity_per_request', nullable: true })
  minQuantityPerRequest: number | null;

  @Column('text', { name: 'supplier_name', nullable: true })
  supplierName: string | null;

  @Column('text', { name: 'email_person_create', nullable: true })
  emailPersonCreate: string | null;

  @Column('numeric', { name: 'sample_cost', nullable: true })
  sampleCost: string | null;

  @Column('integer', { name: 'shipment_time', nullable: true })
  shipmentTime: number | null;

  @Column('integer', { name: 'request_divide_by', nullable: true })
  requestDivideBy: number | null;

  @Column('integer', { name: 'sku_divide_by', nullable: true })
  skuDivideBy: number | null;

  @Column('numeric', { name: 'quotation', nullable: true })
  quotation: string | null;

  @Column('jsonb', { name: 'quotations', nullable: true })
  quotations: object | null;

  @Column('integer', { name: 'requirement_by', nullable: true })
  requirementBy: number | null;

  @Column('text', { name: 'factory_code', nullable: true })
  factoryCode: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'factory_name', nullable: true })
  factoryName: string | null;

  @Column('text', { name: 'fulfillment_variant_version_id', nullable: true })
  fulfillmentVariantVersionId: string | null;

  @Column('integer', { name: 'capacity', nullable: true })
  capacity: number | null;

  @Column('text', { name: 'type', nullable: true })
  type: string | null;
}
