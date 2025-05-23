import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './Product';
import { Supplier } from './Supplier';
import { ContractVersion } from './ContractVersion';
import { Do } from './Do';
import { Do2 } from './Do2';
import { DoCopy1 } from './DoCopy1';

@Index('PK_contract', ['id'], { unique: true })
@Index('IX_contract_product_id', ['productId'], {})
@Index('IX_contract_supplier_id', ['supplierId'], {})
@Entity('contract', { schema: 'public' })
export class Contract {
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

  @Column('text', { name: 'supplier_id', nullable: true })
  supplierId: string | null;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'version' })
  version: number;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'form', nullable: true })
  form: string | null;

  @ManyToOne(() => Product, (product) => product.contracts, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Supplier, (supplier) => supplier.contracts, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'id' }])
  supplier: Supplier;

  @OneToMany(() => ContractVersion, (contractVersion) => contractVersion.contract)
  contractVersions: ContractVersion[];

  // @OneToMany(()=>Do,do=>do.contract)

  dos: Do[];

  @OneToMany(() => Do2, (do2) => do2.contract)
  dos2: Do2[];

  @OneToMany(() => DoCopy1, (doCopy1) => doCopy1.contract)
  doCopies: DoCopy1[];
}
