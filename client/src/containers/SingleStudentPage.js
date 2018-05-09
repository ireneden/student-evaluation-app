import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../actions/students'
import {getEvaluations} from '../actions/evaluations'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import AddEvaluationForm from './AddEvaluationForm'


class SingleStudentPage extends PureComponent {

    componentWillMount(){
        this.props.getEvaluations(this.props.match.params.id)
        this.props.getStudent(this.props.match.params.id)
    }

    render(){
        const {evaluations, student} = this.props

        return(
            <Paper className="outer-paper">
            <h1>Evaluations for student # {this.props.match.params.id}</h1>
            <AddEvaluationForm studentId={this.props.match.params.id}/>
            { evaluations.map(evaluation =>
                <div className= "evaluations">
                <h2>Evaluation date: {evaluation.date} Evaluation: {evaluation.evaluation}</h2>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    evaluations: state.evaluations,
    batch: state.batch
})

export default connect (mapStateToProps, {getStudent, getEvaluations})(SingleStudentPage)