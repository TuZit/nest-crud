import { Column, Entity, Index } from 'typeorm';

@Index('PK_moq_adjustment', ['id'], { unique: true })
@Entity('moq_adjustment', { schema: 'public' })
export class MoqAdjustment {
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

  @Column('text', { name: 'created_by_email', nullable: true })
  createdByEmail: string | null;

  @Column('text', { name: 'update_by_email', nullable: true })
  updateByEmail: string | null;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'supplier_name', nullable: true })
  supplierName: string | null;

  @Column('text', { name: 'factory_id', nullable: true })
  factoryId: string | null;

  @Column('text', { name: 'factory_code', nullable: true })
  factoryCode: string | null;

  @Column('integer', { name: 'total_quantity' })
  totalQuantity: number;

  @Column('numeric', { name: 'total_value_cny' })
  totalValueCny: string;

  @Column('numeric', { name: 'total_value' })
  totalValue: string;

  @Column('integer', { name: 'total_variant' })
  totalVariant: number;

  @Column('numeric', { name: 'merchandise_cost_cny' })
  merchandiseCostCny: string;

  @Column('numeric', { name: 'merchandise_cost' })
  merchandiseCost: string;

  @Column('text', { name: 'reason', nullable: true })
  reason: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('timestamp without time zone', {
    name: 'confirmation_date',
    nullable: true
  })
  confirmationDate: Date | null;

  @Column('text', { name: 'status' })
  status: string;

  @Column('jsonb', { name: 'status_histories', nullable: true })
  statusHistories: object | null;

  @Column('text', { name: 'file_paths', nullable: true, array: true })
  filePaths: string[] | null;

  @Column('text', { name: 'moq_adjustment_reason_id', nullable: true })
  moqAdjustmentReasonId: string | null;

  @Column('text', { name: 'inventory_balance_operator', default: () => "''" })
  inventoryBalanceOperator: string;

  @Column('text', { name: 'moq_balance_operator', default: () => "''" })
  moqBalanceOperator: string;
}
