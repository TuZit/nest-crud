import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Condition } from './Condition';
import { Supplier } from './Supplier';

@Index('PK_agreement_history', ['conditionId', 'supplierId'], { unique: true })
@Index('IX_agreement_history_supplier_id', ['supplierId'], {})
@Entity('agreement_history', { schema: 'public' })
export class AgreementHistory {
  @Column('text', { primary: true, name: 'condition_id' })
  conditionId: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { primary: true, name: 'supplier_id', default: () => "''" })
  supplierId: string;

  @ManyToOne(() => Condition, (condition) => condition.agreementHistories, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'condition_id', referencedColumnName: 'id' }])
  condition: Condition;

  @ManyToOne(() => Supplier, (supplier) => supplier.agreementHistories, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;
}
