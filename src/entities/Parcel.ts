import { Column, Entity, Index, OneToMany } from 'typeorm';
import { DoParcel } from './DoParcel';
import { Tn } from './Tn';

@Index('PK_parcel', ['id'], { unique: true })
@Entity('parcel', { schema: 'public' })
export class Parcel {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'origin_action', nullable: true })
  originAction: string | null;

  @Column('text', { name: 'origin_parcel_id', nullable: true })
  originParcelId: string | null;

  @Column('integer', { name: 'origin_version', default: () => '0' })
  originVersion: number;

  @Column('timestamp without time zone', {
    name: 'status_date_delivered',
    nullable: true
  })
  statusDateDelivered: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_inus',
    nullable: true
  })
  statusDateInus: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_ta',
    nullable: true
  })
  statusDateTa: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_to',
    nullable: true
  })
  statusDateTo: Date | null;

  @Column('text', { name: 'closed_reason', nullable: true })
  closedReason: string | null;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'label', default: () => "''" })
  label: string;

  @Column('text', { name: 'parcel_group_id', nullable: true })
  parcelGroupId: string | null;

  @Column('boolean', { name: 'warning', nullable: true })
  warning: boolean | null;

  @Column('timestamp without time zone', {
    name: 'status_date_warning',
    nullable: true
  })
  statusDateWarning: Date | null;

  @Column('timestamp without time zone', {
    name: 'status_date_last_update',
    nullable: true
  })
  statusDateLastUpdate: Date | null;

  @Column('text', { name: 'last_log', nullable: true })
  lastLog: string | null;

  @Column('text', { name: 'warning_log', nullable: true })
  warningLog: string | null;

  @Column('text', { name: 'carrier_name', nullable: true })
  carrierName: string | null;

  @Column('double precision', { name: 'weight', nullable: true, precision: 53 })
  weight: number | null;

  @Column('text', { name: 'weight_units', nullable: true })
  weightUnits: string | null;

  @Column('text', { name: 'current_location', nullable: true })
  currentLocation: string | null;

  @Column('text', { name: 'destination_country_code', nullable: true })
  destinationCountryCode: string | null;

  @Column('text', { name: 'destination_postal_code', nullable: true })
  destinationPostalCode: string | null;

  @Column('text', { name: 'destination_state', nullable: true })
  destinationState: string | null;

  @Column('jsonb', { name: 'locations', nullable: true })
  locations: object | null;

  @Column('text', { name: 'origin_country', nullable: true })
  originCountry: string | null;

  @Column('text', { name: 'origin_location', nullable: true })
  originLocation: string | null;

  @Column('text', { name: 'destination_zip4_code', nullable: true })
  destinationZip4Code: string | null;

  @OneToMany(() => DoParcel, (doParcel) => doParcel.parcel)
  doParcels: DoParcel[];

  @OneToMany(() => Tn, (tn) => tn.parcel)
  tns: Tn[];
}
