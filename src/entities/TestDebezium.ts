import { Column, Entity, Index } from 'typeorm';

@Index('test_debezium_pk', ['id'], { unique: true })
@Entity('test_debezium', { schema: 'public' })
export class TestDebezium {
  @Column('character varying', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;
}
