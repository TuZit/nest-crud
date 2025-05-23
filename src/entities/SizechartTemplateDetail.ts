import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { SizechartTemplate } from './SizechartTemplate';

@Index('PK_sizechart_template_detail', ['id'], { unique: true })
@Index('IX_sizechart_template_detail_template_id', ['templateId'], {})
@Entity('sizechart_template_detail', { schema: 'public' })
export class SizechartTemplateDetail {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', {
    name: 'custom_atribute_values',
    nullable: true,
    array: true
  })
  customAtributeValues: string[] | null;

  @Column('text', { name: 'template_id', nullable: true })
  templateId: string | null;

  @Column('integer', { name: 'order_position', default: () => '0' })
  orderPosition: number;

  @Column('text', { name: 'title', nullable: true })
  title: string | null;

  @ManyToOne(() => SizechartTemplate, (sizechartTemplate) => sizechartTemplate.sizechartTemplateDetails, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn([{ name: 'template_id', referencedColumnName: 'id' }])
  template: SizechartTemplate;
}
