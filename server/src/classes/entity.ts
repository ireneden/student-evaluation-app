import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
// import { IsDate } from 'class-validator';

@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    // @Unique(["batchNumber"])
    @Column('text', { nullable: false })
    batchNumber?: Number

    @Column('date', { nullable: false })
    startDate: Date
    
    @Column('date', { nullable: false })
    endDate: Date
}

