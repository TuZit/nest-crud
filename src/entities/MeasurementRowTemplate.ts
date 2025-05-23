import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MeasurementDefaultTemplate } from './MeasurementDefaultTemplate';

@Index('PK_measurement_row_template', ['id'], { unique: true })
@Index('IX_measurement_row_template_template_id', ['templateId'], {})
@Entity('measurement_row_template', { schema: 'public' })
export class MeasurementRowTemplate {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('integer', { name: 'pom_id' })
  pomId: number;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'tolerance', nullable: true })
  tolerance: string | null;

  @Column('text', { name: 'template_id', nullable: true })
  templateId: string | null;

  @ManyToOne(
    () => MeasurementDefaultTemplate,
    (measurementDefaultTemplate) => measurementDefaultTemplate.measurementRowTemplates,
    { onDelete: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'template_id', referencedColumnName: 'id' }])
  template: MeasurementDefaultTemplate;
}
