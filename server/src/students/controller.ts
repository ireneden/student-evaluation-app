import { Post, Param, HttpCode, Get, Body, JsonController, Patch, NotFoundError, Delete} from 'routing-controllers'
import Student from './entity';
import * as request from 'superagent'


@JsonController()
export default class StudentController {

    @Get('/students')
    async all() {
    const students = await Student.find()
    if (!students) throw new NotFoundError('There are no students')
    return { students }
    }

    @Post('/students')
    @HttpCode(201)
    async addStudent(
        @Body() student: Student
    ) {
        const { ...info } = student
        const entity = Student.create(info)
        return entity.save()
      }

      @Get('/students/:id')
      async student(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)
        return { student }
      }


    @Patch('/students/:id([0-9]+)')
    async updateStudent(
        @Param('id') id: number,
        @Body() update: Partial<Student> 
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Student not found')
        const studentUpdated = Student.merge(student, update)
        const entity = await studentUpdated.save()
        return entity
    }

    @Delete('/students/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Student not found')
        if (student) Student.remove(student)
        return 'Student was deleted successfully'
    }
}