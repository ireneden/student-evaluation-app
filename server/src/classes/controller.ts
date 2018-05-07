import { Post, Param, HttpCode, Get, Body, Patch, JsonController, Delete, NotFoundError } from 'routing-controllers'
import Batch from './entity'
import * as request from 'superagent'

@JsonController()
export default class BatchController {

    @Post('/classes')
    @HttpCode(201)
    createPage(
    @Body() batch: Batch
    ) {
    return batch.save()
    }

    @Get('/classes')
    @HttpCode(201)
    getBatches(){
        return Batch.find()
    }

    @Get('/classes/:id([0-9]+)')
    @HttpCode(201)
    async getBatchById(
        @Param('id') batchId: number
    ) {
        const batchById = await Batch.findOne(batchId)

        if (!batchById) throw new NotFoundError('Quiz doesn\'t exist')
        
        if (batchById) {
        return {batchById}
        }
    }
}
