import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../actions/students'
import {getEvaluations} from '../actions/evaluations'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import AddEvaluationForm from './AddEvaluationForm'


class SingleStudentPage extends PureComponent {

    componentWillMount(){
        this.props.getStudent(this.props.match.params.id)
        this.props.getEvaluations(this.props.match.params.id)
    }

    render(){
        const {batch, students, evaluations} = this.props

        return(
            <Paper className="outer-paper">
            <h1>{students.name}</h1>
            <AddEvaluationForm />
            { evaluations.map(evaluation =>
                <div className= "evaluationsContainer">
                <h2>{evaluation.date} : {evaluation.evaluation}</h2>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students,
    evaluations: state.evaluations
})

export default connect (mapStateToProps, {getStudent, getEvaluations})(SingleStudentPage)