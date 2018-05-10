import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addNewEvaluation} from '../actions/evaluations'
import {latestEvaluation} from '../actions/evaluations'


class AddEvaluationForm extends PureComponent {
    state = {}

    handleChange = (event) => {
        const {name, value} =event.target
        this.setState({
            batch: this.props.batchId,
            studentId: this.props.studentId,
            evaluation: this.props.latestEvaluation,
            [name] : value
        })
      };
      
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewEvaluation(this.state)
        this.props.latestEvaluation(this.props.studentId, this.state) 
      }

      render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='time'
                    name='time'
                    label='Date'
                    value={this.state.time || '' }
                    onChange={this.handleChange}
                />

                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || ''}
                    onChange={this.handleChange}
                />

                <label className="evaluationLabel">
                    Evaluation: 
                    <select onChange={this.handleChange} name='evaluation' className="colors-selector">
                    <option value="Green" name='evaluation' className="colors-options">Green</option>
                    <option value="Yellow" name='evaluation' className="colors-options">Yellow</option>
                    <option value="Red" name='evaluation' className="colors-options">Red</option>
                    </select>
                </label>
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

export default connect(mapStateToProps, {addNewEvaluation, latestEvaluation})(AddEvaluationForm)