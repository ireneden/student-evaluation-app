import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: true })
  studentId: number

  @Column('text', { nullable: true })
  batchId: number

  @Column({ type: "date", default: () => "CURRENT_DATE"})
  time: string;

  @Column('text', { nullable: false, default: 'White'  })
  evaluation: string

  @Column('text', { nullable: true })
  remarks: string
}