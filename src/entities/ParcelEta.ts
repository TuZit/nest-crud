import { Column, Entity, Index } from 'typeorm';

@Index('PK_parcel_eta', ['id'], { unique: true })
@Entity('parcel_eta', { schema: 'public' })
export class ParcelEta {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'origin_country', nullable: true })
  originCountry: string | null;

  @Column('text', { name: 'origin_location', nullable: true })
  originLocation: string | null;

  @Column('text', { name: 'destination_country_code', nullable: true })
  destinationCountryCode: string | null;

  @Column('text', { name: 'destination_state', nullable: true })
  destinationState: string | null;

  @Column('text', { name: 'destination_postal_code', nullable: true })
  destinationPostalCode: string | null;

  @Column('integer', { name: 'count' })
  count: number;

  @Column('double precision', { name: 'days', precision: 53 })
  days: number;

  @Column('text', { name: 'stats_type' })
  statsType: string;

  @Column('text', { name: 'destination_zip4_code', nullable: true })
  destinationZip4Code: string | null;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;
}
