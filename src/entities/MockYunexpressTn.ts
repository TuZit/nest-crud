import { Column, Entity, Index } from 'typeorm';

@Index('PK_mock_yunexpress_tn', ['id'], { unique: true })
@Entity('mock_yunexpress_tn', { schema: 'public' })
export class MockYunexpressTn {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('text', { name: 'code', nullable: true })
  code: string | null;

  @Column('text', { name: 'supplier_code', nullable: true })
  supplierCode: string | null;

  @Column('text', { name: 'supplier_key', nullable: true })
  supplierKey: string | null;

  @Column('text', { name: 'id2', nullable: true })
  id2: string | null;
}
