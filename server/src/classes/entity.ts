import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDate } from 'class-validator';

@Entity()
export default class Batch extends BaseEntity {

    static removeById(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    batchNumber: Number

    @Column('integer', {default: 1, nullable: true})
    userId: number

    @IsDate()
    @Column({default: 1, nullable: true})
    startDate: Date;

    @Column({default: 1, nullable: true})
    endDate: Date
}