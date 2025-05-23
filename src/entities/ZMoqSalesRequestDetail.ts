import { Column, Entity } from 'typeorm';

@Entity('z_moq_sales_request_detail', { schema: 'public' })
export class ZMoqSalesRequestDetail {
  @Column('text', { name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'sale_request_id', nullable: true })
  saleRequestId: string | null;

  @Column('text', { name: 'variant_id', nullable: true })
  variantId: string | null;

  @Column('integer', { name: 'sold_quantity', nullable: true })
  soldQuantity: number | null;

  @Column('numeric', { name: 'sold_ratio', nullable: true })
  soldRatio: string | null;

  @Column('integer', { name: 'volumn_needed', nullable: true })
  volumnNeeded: number | null;

  @Column('integer', { name: 'remaining', nullable: true })
  remaining: number | null;

  @Column('integer', { name: 'request_quantity', nullable: true })
  requestQuantity: number | null;

  @Column('boolean', { name: 'is_selected' })
  isSelected: boolean;

  @Column('jsonb', { name: 'properties', nullable: true })
  properties: object | null;

  @Column('numeric', { name: 'merchandise_cost', nullable: true })
  merchandiseCost: string | null;

  @Column('text', { name: 'variant_code', nullable: true })
  variantCode: string | null;

  @Column('integer', { name: 'days_to_sell', nullable: true })
  daysToSell: number | null;

  @Column('boolean', { name: 'is_moq', nullable: true })
  isMoq: boolean | null;

  @Column('boolean', { name: 'is_manually_input', nullable: true })
  isManuallyInput: boolean | null;

  @Column('numeric', { name: 'sold_ratio_origin', nullable: true })
  soldRatioOrigin: string | null;

  @Column('boolean', { name: 'is_first_time', nullable: true })
  isFirstTime: boolean | null;

  @Column('timestamp without time zone', {
    name: 'deactive_fc_at',
    nullable: true
  })
  deactiveFcAt: Date | null;

  @Column('boolean', { name: 'is_fake_contract', nullable: true })
  isFakeContract: boolean | null;

  @Column('boolean', { name: 'is_off_fc', nullable: true })
  isOffFc: boolean | null;

  @Column('timestamp without time zone', { name: 'off_fc', nullable: true })
  offFc: Date | null;

  @Column('text', { name: 'variant_name', nullable: true })
  variantName: string | null;

  @Column('jsonb', { name: 'variant_properties', nullable: true })
  variantProperties: object | null;
}
