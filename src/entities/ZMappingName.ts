import { Column, Entity } from 'typeorm';

@Entity('z_mapping_name', { schema: 'public' })
export class ZMappingName {
  @Column('text', { name: 'basic_name', nullable: true })
  basicName: string | null;

  @Column('text', { name: 'core_name', nullable: true })
  coreName: string | null;
}
