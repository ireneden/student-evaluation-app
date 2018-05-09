import { Post, Param, HttpCode, Get, Body, JsonController, Patch, NotFoundError, Delete, Put} from 'routing-controllers'
import Evaluation from './entity';

@JsonController()
export default class EvaluationController {

    @Post('/evaluations')
    @HttpCode(201)
    async addEvaluation(
        @Body() evaluation: Evaluation
    ) {
        const entity = await evaluation.save()

        return entity 
    }

    @Put('/evaluations/:id([0-9]+)')
    async updateEvaluation(
        @Param('id') id: number,
        @Body() update 
    ) {
        const evaluation = await Evaluation.findOne(id)

        if (!evaluation) throw new NotFoundError(`Evaluation was not found`)

        const editedEvaluation = Evaluation.merge(evaluation, update)
        
        const entity = await editedEvaluation.save()
        return entity
    }

    @Get('/evaluationsbyclass/:id([0-9]+)')
    @HttpCode(201)
    getEvaluationsByClass(
        @Param('id') batchId: number
    ) {
        let evaluationsByClass = Evaluation.find( {batchId: batchId} ) 

        return evaluationsByClass 
    }

    @Get('/evaluations')
    @HttpCode(201)
    getEvaluations(){
        return Evaluation.find()
    }

    @Get('/evaluationsbystudent/:id([0-9]+)')
    @HttpCode(201)
    getEvaluationsByStudent(
        @Param('id') studentId: number
    ) {
        let evaluationsByStudent = Evaluation.find( {studentId: studentId} ) 

        return evaluationsByStudent 
    }

    @Delete('/evaluations/:id')
    async deleteEvaluation(
        @Param('id') id: number
    ) {
        const evaluation = await Evaluation.findOne(id)

        if (!evaluation) throw new NotFoundError(`Evaluation was not found`)

        Evaluation.remove(evaluation)
        return 'Evaluation deleted successfully'
    }
}