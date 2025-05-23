import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MeasurementRowTemplate } from './MeasurementRowTemplate';

@Index('PK_measurement_default_template', ['id'], { unique: true })
@Entity('measurement_default_template', { schema: 'public' })
export class MeasurementDefaultTemplate {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('timestamp without time zone', { name: 'created' })
  created: Date;

  @Column('timestamp without time zone', { name: 'updated' })
  updated: Date;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'column_title', nullable: true, array: true })
  columnTitle: string[] | null;

  @Column('text', { name: 'row_title', nullable: true, array: true })
  rowTitle: string[] | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('boolean', { name: 'is_active', default: () => 'false' })
  isActive: boolean;

  @Column('text', { name: 'template_code', nullable: true })
  templateCode: string | null;

  @OneToMany(() => MeasurementRowTemplate, (measurementRowTemplate) => measurementRowTemplate.template)
  measurementRowTemplates: MeasurementRowTemplate[];
}
