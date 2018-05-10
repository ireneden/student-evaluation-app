import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addStudent} from '../actions/students'


export class AddStudentForm extends PureComponent {
    state = {}

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addStudent(this.state)
    }



    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
          batchId: this.props.batchId,

          [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='name'
                    name='name'
                    label='Full name'
                    value={this.state.name || ''}
                    onChange={this.handleChange}
                />
                <TextField
                  id='picture'
                  name='picture'
                  label='Add picture URL'
                  value={this.state.picture || ''}
                  onChange={this.handleChange}
                  />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-student"
                    onSubmit={this.handleSubmit}
                >
                    Add a new student
                </Button>
            </form>
        )
    }
}
const mapStateToProps = function (state) {
	return {
        batch: state.batch,
	}
}

export default connect(mapStateToProps, {addStudent})(AddStudentForm)