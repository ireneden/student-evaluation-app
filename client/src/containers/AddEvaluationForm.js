import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addNewEvaluation} from '../actions/evaluations'


class AddEvaluationForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewEvaluation(this.state)
    }


    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            batch: this.props.batch.id,
            students: this.props.students.id,
            [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='date'
                    name='date'
                    label='Evaluation Date'
                    value={this.state.date || ''}
                    onChange={this.handleChange}
                />
                <TextField
                    id='evaluation'
                    name='evaluation'
                    label='Add an evaluation'
                    value={this.state.evaluation || ''}
                    onChange={this.handleChange}
                  />
                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="addStudent"
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
        students: state.students
	}
}

export default connect(mapStateToProps, {addNewEvaluation})(AddEvaluationForm)