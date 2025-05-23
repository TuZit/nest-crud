import { Column, Entity, Index } from 'typeorm';

@Index('PK_mock_seventeen_tn', ['id'], { unique: true })
@Entity('mock_seventeen_tn', { schema: 'public' })
export class MockSeventeenTn {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('boolean', { name: 'closed' })
  closed: boolean;

  @Column('timestamp without time zone', { name: 'next', nullable: true })
  next: Date | null;
}
