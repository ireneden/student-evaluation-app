import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../actions/students'
import {getClass} from '../actions/classes'
import {addStudent} from '../actions/students'
import {deleteStudent} from '../actions/students'
import {Link} from 'react-router-dom'
import AddStudentForm from './AddStudentForm'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';


class SingleClassPage extends PureComponent {

    componentWillMount(){
        this.props.getStudents(this.props.match.params.id)
        this.props.getClass(this.props.match.params.id)
    }

    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId)
    }

   

    render(){
        const {batch, students} = this.props
        return(
            <div>
            <Paper className="outer-paper">
            <h2>Add a new student</h2>
            <AddStudentForm batchId={this.props.match.params.id}/>
            <h2>Students of batch # {this.props.match.params.id} </h2>
            {students.map(student =>
                <div className="students-list">
                <Link to={`/students/${student.id}`}><h3>Student name: {student.name}</h3></Link>
                <h4>Picture (url): {student.picture} - Last evaluation: {student.latestEvaluation}</h4>
                <Button 
                type='submit'
                color="secondary"
                variant="raised"
                className="delete-student"
                onClick={() => this.deleteStudent(student.id)}>Delete Student
                </Button>
                </div>
            )}
            </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students,
    batch: state.batch
})

export default connect (mapStateToProps, {getStudents, getClass, deleteStudent})(SingleClassPage)
