import { Column, Entity } from 'typeorm';

@Entity('z_variant_created', { schema: 'public' })
export class ZVariantCreated {
  @Column('text', { name: 'id' })
  id: string;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;
}
