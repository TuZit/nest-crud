import { Column, Entity, Index } from 'typeorm';

@Index('ds_daily_product_ffm_pk', ['created', 'productId'], { unique: true })
@Entity('ds_daily_product_ffm', { schema: 'public' })
export class DsDailyProductFfm {
  @Column('timestamp without time zone', { primary: true, name: 'created' })
  created: Date;

  @Column('text', { primary: true, name: 'product_id' })
  productId: string;

  @Column('text', { name: 'product_code', nullable: true })
  productCode: string | null;

  @Column('text', { name: 'product_label', nullable: true })
  productLabel: string | null;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'product_core_id', nullable: true })
  productCoreId: string | null;

  @Column('text', { name: 'product_core_label', nullable: true })
  productCoreLabel: string | null;

  @Column('text', { name: 'fulfillment_email', nullable: true })
  fulfillmentEmail: string | null;

  @Column('text', { name: 'merchandiser_email', nullable: true })
  merchandiserEmail: string | null;

  @Column('timestamp without time zone', { name: 'from_time', nullable: true })
  fromTime: Date | null;

  @Column('timestamp without time zone', { name: 'to_time', nullable: true })
  toTime: Date | null;
}
