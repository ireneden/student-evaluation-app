import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../actions/students'
import {getClass} from '../actions/classes'
import {addStudent} from '../actions/students'
import {deleteStudent} from '../actions/students'
import {Link} from 'react-router-dom'
import AddStudentForm from './AddStudentForm'
import RandomStudent from './RandomStudentButton'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
// import {calculateEvaluationsPercent} from '../randomStudent'

function calculateEvaluationsPercent(studentsArray) {

    const totalStudents = studentsArray.length
    const greenStudentsOnly = studentsArray.filter(student => student.latestEvaluation === 'Green').length
    const yellowStudentsOnly = studentsArray.filter(student =>student.latestEvaluation === 'Yellow').length
    const redStudentsOnly = studentsArray.filter(student => student.latestEvaluation === 'Red').length
    const whiteStudentsOnly = studentsArray.filter(student => student.latestEvaluation === 'White').length
  
    let greenPercent = (greenStudentsOnly/totalStudents * 100).toFixed(2)
    let yellowPercent = (yellowStudentsOnly/totalStudents * 100).toFixed(2)
    let redPercent = (redStudentsOnly/totalStudents * 100).toFixed(2)
    let whitePercent = (whiteStudentsOnly/totalStudents * 100).toFixed(2)
  
    return {
      greenStudents: greenPercent,
      yellowStudents: yellowPercent,
      redStudents: redPercent,
      whiteStudents: whitePercent
    }
  }
class SingleClassPage extends PureComponent {

    componentWillMount(){
        this.props.getStudents(this.props.match.params.id)
        this.props.getClass(this.props.match.params.id)
    }

    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId)
    }

    render(){

        const {batch, students, evaluations} = this.props
        console.log("console logging this props students +" + this.props.students)
        const percent = calculateEvaluationsPercent(students)
        
        return(
            <div>
                <div className="colorsBatch">
                    {percent.greenStudents ? <span style={{backgroundColor: 'green', margin: 5, padding: 10}}>{percent.greenStudents}%</span>: null}
                    {percent.yellowStudents ? <span style={{backgroundColor: 'yellow', margin: 5, padding: 10}}>{percent.yellowStudents}%</span>: null}
                    {percent.redStudents ? <span style={{backgroundColor: 'red', margin: 5, padding: 10}}>{percent.redStudents}%</span>: null}
                </div>
            <Paper className="outer-paper">
            <RandomStudent students={this.props.students}/>
            <h2 className="addStudent"> Add a new student</h2>
            <AddStudentForm batchId={this.props.match.params.id}/>
            <h1>Students of batch # {this.props.match.params.id} </h1>
            {students.map(student =>
                <div className="students-list">
                <Link to={`/students/${student.id}`} ><h3>Student name: {student.name}</h3></Link>
                <h3>Last evaluation: {student.latestEvaluation}</h3>
                <h4><img className="students-pictures" src = {student.picture} /></h4>
               <div>
                <Button 
                type='submit'
                color="secondary"
                variant="raised"
                className="delete-student"
                onClick={() => this.deleteStudent(student.id)}>Delete Student
                </Button>
                <Link to={`/students/${student.id}`} >
                <Button 
                type='submit'
                color="secondary"
                variant="raised"
                className="edit-student"> Edit Student
                </Button>
                </Link>
                </div>
                <p>_______________________________________________________________</p>
                </div>
            )}
            </Paper>
         
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students,
    batch: state.batch,
    evaluations: state.evaluations,
    student: state.student
})

export default connect (mapStateToProps, {getStudents, getClass, deleteStudent})(SingleClassPage)
