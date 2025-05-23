import { Column, Entity, Index } from 'typeorm';

@Index('test_debezium_2_pk', ['id'], { unique: true })
@Entity('test_debezium_2', { schema: 'public' })
export class TestDebezium_2 {
  @Column('character varying', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;

  @Column('timestamp without time zone', {
    name: 'created',
    nullable: true,
    default: () => 'now()'
  })
  created: Date | null;

  @Column('timestamp without time zone', {
    name: 'updated',
    nullable: true,
    default: () => 'now()'
  })
  updated: Date | null;
}
