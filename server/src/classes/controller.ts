import { Post, Param, HttpCode, Get, Body, JsonController, } from 'routing-controllers'
import Batch from './entity'

@JsonController()
export default class BatchController {

    @Post('/classes')
    @HttpCode(201)
    async addBatch(
        @Body() batch: Batch
    ) {
        const entity = await batch.save()

        return entity
    }

    @Get('/classes')
    @HttpCode(201)
    getBatches(){
        return Batch.find()
    }

    @Get('/classes/:id([0-9]+)')
    async getBatch(
        @Param('id') id: number,
    ){
        return await Batch.findOne(id)
    }
}

