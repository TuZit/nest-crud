import { Column, Entity, Index } from 'typeorm';

@Index('PK_file_history', ['id'], { unique: true })
@Entity('file_history', { schema: 'public' })
export class FileHistory {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('text', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'updated_by', nullable: true })
  updatedBy: string | null;

  @Column('text', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('text', { name: 'email', nullable: true })
  email: string | null;

  @Column('text', { name: 'file_path', nullable: true })
  filePath: string | null;

  @Column('text', { name: 'upload_type' })
  uploadType: string;
}
