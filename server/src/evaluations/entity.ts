import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: true })
  studentId: number

  @Column('text', { nullable: true })
  batchId: number

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  time: string;

  @Column('text', { nullable: false })
  evaluation: string

  @Column('text', { nullable: true })
  remarks: string
}