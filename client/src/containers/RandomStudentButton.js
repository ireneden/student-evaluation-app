import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {chooseRandomStudent} from '../randomStudent.js'
import {randomizeStudents} from '../actions/students'
import randomStudent from '../reducers/randomStudent.js';

export  class RandomStudent extends PureComponent {

    randomizeStudents = (students) => {
        this.props.randomizeStudents(chooseRandomStudent(students))
        console.log(students)
        console.log(chooseRandomStudent(students))
      }    

    render(){
        const {students, randomStudent} = this.props
        console.log("console logging students.name", students)

        return(
            <div>
            <Button 
            type='submit'
            color="primary"
            variant="raised"
            className ="chooseRandomStudent"
            onClick = {() => this.randomizeStudents(students)}
            >Choose a random student!</Button>
            {randomStudent !== null && <p>{randomStudent.name}</p>}
            <p></p>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
        randomStudent: state.randomStudent
	}
}

export default connect(mapStateToProps, {chooseRandomStudent, randomizeStudents}) (RandomStudent);