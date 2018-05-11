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
import {calculateEvaluationsPercent} from '../randomStudent'



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
        
        return(
            <div>
            <Paper className="outer-paper">
            <RandomStudent students={this.props}/>
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
