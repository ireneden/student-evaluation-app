import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {updateStudent} from '../actions/students'
import AddStudentForm from "./AddStudentForm"

class EditStudentForm extends PureComponent {
  state = {
    editStudent: false
  }

  toggleEdit = () => {
    this.setState({
        updateStudent: !this.state.updateStudent,
    })
}

    updateStudent = (student) => {
    this.props.updateStudent(this.props.match.params.id, student)
    this.toggleEdit()
  }

  render() {
    const {student} = this.props
    return (
      <div>
          {
          !this.state.updateStudent &&
          <div><button onClick={this.toggleEdit}>EDIT student</button></div>
        }
        {
          this.state.updateStudent &&
          <AddStudentForm onSubmit={this.updateStudent} />
        }

        
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    student: state.student,
    batch: state.batch
  }
}

export default connect(mapStateToProps, {updateStudent})(EditStudentForm)


