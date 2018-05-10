import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addClass} from '../actions/classes'


class ClassForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addClass(this.state)
    }


    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
          [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit} className="addClassForm">
                <TextField
                    id='batch'
                    name='batchNumber'
                    label='Batch Number'
                    value={this.state.batchNumber || ''}
                    onChange={this.handleChange}
                />
                <TextField
                  id='startDate'
                  name='startDate'
                  label='Start Date'
                  value={this.state.startDate || ''}
                  onChange={this.handleChange}
                  />
                <TextField
                    id='endDate'
                    name='endDate'
                    label='End Date'
                    value={this.state.endDate || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-class"
                >
                    Add a class
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        classes: state.classes
	}
}

export default connect(mapStateToProps, {addClass})(ClassForm)