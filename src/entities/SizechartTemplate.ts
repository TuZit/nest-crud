import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SizechartTemplateDetail } from './SizechartTemplateDetail';

@Index('PK_sizechart_template', ['id'], { unique: true })
@Entity('sizechart_template', { schema: 'public' })
export class SizechartTemplate {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('text', { name: 'product_line', nullable: true })
  productLine: string | null;

  @Column('text', { name: 'template_code', nullable: true })
  templateCode: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('boolean', { name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => SizechartTemplateDetail, (sizechartTemplateDetail) => sizechartTemplateDetail.template)
  sizechartTemplateDetails: SizechartTemplateDetail[];
}
