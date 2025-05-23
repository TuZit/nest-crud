import { Column, Entity, Index } from 'typeorm';

@Index('PK_product_stats', ['id'], { unique: true })
@Entity('product_stats', { schema: 'public' })
export class ProductStats {
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

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'label', nullable: true })
  label: string | null;

  @Column('integer', { name: 'total_DO' })
  totalDo: number;

  @Column('integer', { name: 'total_PO' })
  totalPo: number;

  @Column('numeric', { name: 'risk_value' })
  riskValue: string;

  @Column('numeric', { name: 'amount' })
  amount: string;

  @Column('numeric', { name: 'tax_amount' })
  taxAmount: string;

  @Column('integer', { name: 'low_stock', nullable: true })
  lowStock: number | null;

  @Column('integer', { name: 'out_of_stock', nullable: true })
  outOfStock: number | null;

  @Column('integer', { name: 'do_last_30_days', nullable: true })
  doLast_30Days: number | null;

  @Column('integer', { name: 'po_last_30_days', nullable: true })
  poLast_30Days: number | null;

  @Column('integer', { name: 'low_stock_inventory', nullable: true })
  lowStockInventory: number | null;

  @Column('integer', { name: 'out_of_stock_inventory', nullable: true })
  outOfStockInventory: number | null;
}
