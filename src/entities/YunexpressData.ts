import { Column, Entity, Index } from 'typeorm';

@Index('yunexpress_data_fix_pkey', ['poId'], { unique: true })
@Entity('yunexpress_data', { schema: 'public' })
export class YunexpressData {
  @Column('text', { primary: true, name: 'po_id' })
  poId: string;

  @Column('timestamp without time zone', { name: 'po_created' })
  poCreated: Date;

  @Column('text', { name: 'po_code', nullable: true })
  poCode: string | null;

  @Column('text', { name: 'shippingmethodname', nullable: true })
  shippingmethodname: string | null;

  @Column('text', { name: 'product_name', nullable: true })
  productName: string | null;

  @Column('numeric', { name: 're', nullable: true })
  re: string | null;

  @Column('numeric', { name: 'parcel_contract_weight', nullable: true })
  parcelContractWeight: string | null;

  @Column('numeric', { name: 'parcel_yunexpress_weight', nullable: true })
  parcelYunexpressWeight: string | null;

  @Column('numeric', { name: 'contract_shipping_cost', nullable: true })
  contractShippingCost: string | null;

  @Column('numeric', { name: 'yunexpress_shipping_cost_us', nullable: true })
  yunexpressShippingCostUs: string | null;

  @Column('numeric', { name: 'yunexpress_total_cost', nullable: true })
  yunexpressTotalCost: string | null;

  @Column('numeric', { name: 'mc', nullable: true })
  mc: string | null;

  @Column('numeric', { name: 'packingcost', nullable: true })
  packingcost: string | null;

  @Column('numeric', { name: 'contract_pc', nullable: true })
  contractPc: string | null;

  @Column('numeric', { name: 'yunexpress_pc', nullable: true })
  yunexpressPc: string | null;

  @Column('numeric', { name: 'pc_contract_ratio', nullable: true })
  pcContractRatio: string | null;

  @Column('numeric', { name: 'pc_yunexpress_ratio', nullable: true })
  pcYunexpressRatio: string | null;

  @Column('numeric', { name: 'diff', nullable: true })
  diff: string | null;

  @Column('numeric', { name: 'yunexpress_totalfee', nullable: true })
  yunexpressTotalfee: string | null;

  @Column('text', { name: 'yunexpress_standardcurrencycode', nullable: true })
  yunexpressStandardcurrencycode: string | null;

  @Column('numeric', { name: 'convert_rate', nullable: true })
  convertRate: string | null;

  @Column('integer', { name: 'po_count', nullable: true })
  poCount: number | null;

  @Column('integer', { name: 'do_has_waybill', nullable: true })
  doHasWaybill: number | null;

  @Column('integer', { name: 'do_count', nullable: true })
  doCount: number | null;

  @Column('text', { name: 'note', nullable: true })
  note: string | null;

  @Column('text', { name: 'shipping_fee_type', nullable: true })
  shippingFeeType: string | null;

  @Column('boolean', { name: 'has_data', nullable: true })
  hasData: boolean | null;
}
