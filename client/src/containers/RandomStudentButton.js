import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {chooseRandomStudent} from '../randomStudent.js'
import {randomizeStudents} from '../actions/students'

export  class RandomStudent extends PureComponent {

    randomizeStudents = (students) => {
        this.props.randomizeStudents(chooseRandomStudent(students))
        console.log(students)
      }

    render(){
        const {students} = this.props
        console.log("console logging students.name" + students.name)

        return(
            <div>
            <Button 
            type='submit'
            color="primary"
            variant="raised"
            className ="chooseRandomStudent"
            onClick = {() => this.randomizeStudents(chooseRandomStudent(students))}
            >Choose a random student!</Button>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students
	}
}

export default connect(mapStateToProps, {chooseRandomStudent, randomizeStudents}) (RandomStudent);