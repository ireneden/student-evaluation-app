import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDate } from 'class-validator';

@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    batchNumber: Number

    @Column('integer', {default: 1, nullable: true})
    userId: Number

    @Column('integer', {default: 1, nullable: true})
    startDate: Number
    
    @Column('integer', {default: 1, nullable: true})
    endDate: Number
}