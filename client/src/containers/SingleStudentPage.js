import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../actions/students'
import {getEvaluations} from '../actions/evaluations'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import AddEvaluationForm from './AddEvaluationForm'
import {calculateEvaluationsPercent} from '../randomStudent'


class SingleStudentPage extends PureComponent {

    componentWillMount(){
        this.props.getEvaluations(this.props.match.params.id)
        this.props.getStudent(this.props.match.params.id)
    }

    render(){
        const {evaluations, student, batch} = this.props
        return(
            <div>
            <Paper className="outer-paper">
            <h1>Evaluations for student # {this.props.match.params.id}</h1>
            <AddEvaluationForm studentId={this.props.match.params.id} batchId={this.props.batchId} />
            { evaluations.map(score =>
                <div className= "evaluations" >
                <h2>Evaluation date: {score.time} Evaluation: {score.evaluation}</h2>
                </div>
            )}
            </Paper>
               <h3 className="greenPercentage"> Percentage of Green evaluations: {calculateEvaluationsPercent(this.props.evaluations).greenStudents} </h3>
               <h3 className="yellowPercentage"> Percentage of Yellow evaluations: {calculateEvaluationsPercent(this.props.evaluations).yellowStudents} </h3>
               <h3 className="redPercentage"> Percentage of Red evaluations: {calculateEvaluationsPercent(this.props.evaluations).redStudents} </h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    evaluations: state.evaluations,
    batch: state.batch
})

export default connect (mapStateToProps, {getStudent, getEvaluations})(SingleStudentPage)