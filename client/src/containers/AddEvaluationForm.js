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

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='date'
                    name='date'
                    label='Date'
                    value={this.state.date || '' }
                    onChange={this.handleChange}
                />

                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || ''}
                    onChange={this.handleChange}
                />

                <label>
                    Evaluation: 
                    <select onChange={this.handleChange} name='evaluation'>
                    <option value="Green" name='evaluation'>Green</option>
                    <option value="Yellow" name='evaluation'>Yellow</option>
                    <option value="Red" name='evaluation'>Red</option>
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
{/* <TextField
                    id='evaluation'
                    name='evaluation'
                    label='Add evaluation'
                    value={this.state.evaluation || ''}
                    onChange={this.handleChange}
                /> */}

const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
        batch: state.batch,
        student: state.student
	}
}

export default connect(mapStateToProps, {addNewEvaluation})(AddEvaluationForm)