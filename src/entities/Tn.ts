import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Parcel } from './Parcel';

@Index('tn_code_index', ['code'], {})
@Index('PK_tn', ['id'], { unique: true })
@Index('IX_tn_origin_tn_id', ['originTnId'], {})
@Index('IX_tn_parcel_id', ['parcelId'], {})
@Entity('tn', { schema: 'public' })
export class Tn {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'carrier', nullable: true })
  carrier: string | null;

  @Column('text', { name: 'last_log', nullable: true })
  lastLog: string | null;

  @Column('timestamp without time zone', {
    name: 'last_log_date',
    nullable: true
  })
  lastLogDate: Date | null;

  @Column('text', { name: 'parcel_id', nullable: true })
  parcelId: string | null;

  @Column('text', { name: 'origin_tn_id', nullable: true })
  originTnId: string | null;

  @Column('timestamp without time zone', {
    name: 'updated',
    default: () => "'0001-01-01 00:00:00'"
  })
  updated: Date;

  @Column('text', { name: 'carrier2', nullable: true })
  carrier2: string | null;

  @Column('timestamp without time zone', {
    name: 'carrier2_last_time',
    nullable: true
  })
  carrier2LastTime: Date | null;

  @Column('text', { name: 'carrier2_status', nullable: true })
  carrier2Status: string | null;

  @Column('timestamp without time zone', {
    name: 'carrier_last_time',
    nullable: true
  })
  carrierLastTime: Date | null;

  @Column('text', { name: 'carrier_status', nullable: true })
  carrierStatus: string | null;

  @Column('text', { name: 'country_destination', nullable: true })
  countryDestination: string | null;

  @Column('text', { name: 'country_origin', nullable: true })
  countryOrigin: string | null;

  @Column('jsonb', { name: 'events', nullable: true })
  events: object | null;

  @Column('text', { name: 'status', default: () => "''" })
  status: string;

  @Column('text', { name: 'warning', nullable: true })
  warning: string | null;

  @Column('text', { name: 'warning_message', nullable: true })
  warningMessage: string | null;

  @Column('text', { name: 'reg_payment', nullable: true })
  regPayment: string | null;

  @Column('boolean', { name: 'reg_seventeen', nullable: true })
  regSeventeen: boolean | null;

  @Column('text', { name: 'reg_yunexpress', nullable: true })
  regYunexpress: string | null;

  @Column('timestamp without time zone', {
    name: 'reg_yunexpress_at',
    nullable: true
  })
  regYunexpressAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'reg_payment_at',
    nullable: true
  })
  regPaymentAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'reg_seventeen_at',
    nullable: true
  })
  regSeventeenAt: Date | null;

  @Column('text', { name: 'reg_ruleengine', nullable: true })
  regRuleengine: string | null;

  @Column('timestamp without time zone', {
    name: 'reg_ruleengine_at',
    nullable: true
  })
  regRuleengineAt: Date | null;

  @Column('text', { name: 're_b', nullable: true })
  reB: string | null;

  @Column('text', { name: 're_v', nullable: true })
  reV: string | null;

  @Column('text', { name: 'sync_payment', nullable: true })
  syncPayment: string | null;

  @Column('timestamp without time zone', {
    name: 'sync_payment_at',
    nullable: true
  })
  syncPaymentAt: Date | null;

  @Column('text', { name: 'current_location', nullable: true })
  currentLocation: string | null;

  @Column('jsonb', { name: 'locations', nullable: true })
  locations: object | null;

  @Column('text', { name: 'destination_postal_code', nullable: true })
  destinationPostalCode: string | null;

  @Column('text', { name: 'destination_state', nullable: true })
  destinationState: string | null;

  @Column('text', { name: 'origin_location', nullable: true })
  originLocation: string | null;

  @Column('text', { name: 'destination_zip4_code', nullable: true })
  destinationZip4Code: string | null;

  @Column('text', { name: 'event_17track', nullable: true })
  event_17track: string | null;

  @Column('timestamp without time zone', {
    name: 'event_17track_date',
    nullable: true
  })
  event_17trackDate: Date | null;

  @ManyToOne(() => Parcel, (parcel) => parcel.tns, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'parcel_id', referencedColumnName: 'id' }])
  parcel: Parcel;
}
