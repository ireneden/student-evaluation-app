import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addNewEvaluation} from '../actions/evaluations'


class AddEvaluationForm extends PureComponent {
    state = {}

    handleChange = (event) => {
        const {name, value} =event.target
        this.setState({
            batchId: this.props.batchId,
            studentId: this.props.studentId,
            [name] : value
        })
      };
      
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewEvaluation(this.state)
      }

      render() {
        const initialValues = this.props.initialValues || {}

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='date'
                    name='date'
                    label='Date'
                    value={this.state.date || initialValues.date }
                    onChange={this.handleChange}
                />
                <TextField
                    id='evaluation'
                    name='evaluation'
                    label='Add evaluation'
                    value={this.state.evaluation || initialValues.evaluation || ''}
                    onChange={this.handleChange}
                />
                <p> (please only insert "green", "yellow" or "red" as evaluation <span>😉</span> )</p>
                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || initialValues.remarks || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="add-evaluation"
                >
                    Add Evaluation
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
        batch: state.batch,
        student: state.student
	}
}

export default connect(mapStateToProps, {addNewEvaluation})(AddEvaluationForm)