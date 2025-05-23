import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Do } from './Do';
import { Parcel } from './Parcel';

@Index('IX_do_parcel_do_id', ['doId'], {})
@Index('PK_do_parcel', ['doId', 'parcelId'], { unique: true })
@Index('IX_do_parcel_parcel_id', ['parcelId'], {})
@Entity('do_parcel', { schema: 'public' })
export class DoParcel {
  @Column('text', { primary: true, name: 'do_id' })
  doId: string;

  @Column('text', { primary: true, name: 'parcel_id' })
  parcelId: string;

  @Column('timestamp without time zone', { name: 'created', nullable: true })
  created: Date | null;

  @Column('timestamp without time zone', { name: 'updated', nullable: true })
  updated: Date | null;

  @Column('text', { name: 'label', nullable: true })
  label: string | null;

  @Column('text', { name: 'origin_parcel_id', nullable: true })
  originParcelId: string | null;

  // @ManyToOne(()=>Do,do=>do.doParcels,{ onDelete:"CASCADE" })
  @JoinColumn([{ name: 'do_id', referencedColumnName: 'id' }])
  do: Do;

  @ManyToOne(() => Parcel, (parcel) => parcel.doParcels, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'parcel_id', referencedColumnName: 'id' }])
  parcel: Parcel;
}
