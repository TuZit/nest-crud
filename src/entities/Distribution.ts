import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ContractQuantity } from './ContractQuantity';
import { DistributionDaily } from './DistributionDaily';
import { Product } from './Product';
import { Supplier } from './Supplier';

@Index('IX_distribution_contract_quantity_id', ['contractQuantityId'], {})
@Index('IX_distribution_distribution_daily_id', ['distributionDailyId'], {})
@Index('PK_distribution', ['id'], { unique: true })
@Index('IX_distribution_product_id', ['productId'], {})
@Index('IX_distribution_supplier_id', ['supplierId'], {})
@Entity('distribution', { schema: 'public' })
export class Distribution {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('timestamp without time zone', { name: 'completed', nullable: true })
  completed: Date | null;

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'do_id', nullable: true })
  doId: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'contract_quantity_id', nullable: true })
  contractQuantityId: string | null;

  @Column('text', { name: 'status', nullable: true })
  status: string | null;

  @Column('text', { name: 'distribution_daily_id', nullable: true })
  distributionDailyId: string | null;

  @ManyToOne(() => ContractQuantity, (contractQuantity) => contractQuantity.distributions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'contract_quantity_id', referencedColumnName: 'id' }])
  contractQuantity: ContractQuantity;

  @ManyToOne(() => DistributionDaily, (distributionDaily) => distributionDaily.distributions, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'distribution_daily_id', referencedColumnName: 'id' }])
  distributionDaily: DistributionDaily;

  @ManyToOne(() => Product, (product) => product.distributions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Supplier, (supplier) => supplier.distributions, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
