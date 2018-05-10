import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {updateStudent} from '../actions/students'


class EditStudentForm extends PureComponent {
    state = {}

    handleChange = (event) => {
        const {name, value} =event.target
        this.setState({
            student: this.props.studentId,
        
            [name] : value
        })
      };
      
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateStudent(this.props.studentId, this.state)
      }

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
                >
                    Edit student
                </Button>
            </form>
        )
    }
}



const mapStateToProps = function (state) {
	return {
        batch: state.batch,
        student: state.student
	}
}

export default connect(mapStateToProps, {updateStudent})(EditStudentForm)
// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField'
// import {updateStudent} from '../actions/students'
// import AddStudentForm from "./AddStudentForm"

// class EditStudentForm extends PureComponent {
//   state = {
//     editStudent: false
//   }

//   toggleEdit = () => {
//     this.setState({
//         editStudent: !this.state.editStudent,
//     })
// }

//     updateStudent = (student) => {
//     this.props.updateStudent(this.props.studentId, student)
//     this.toggleEdit()
//   }


//   render() {
//     const {student} = this.props
//     return (
//       <div>
//           {
//           !this.state.updateStudent &&
//           <div><button onClick={this.toggleEdit} className="editButton">EDIT STUDENT</button></div>
//         }
//         {
//           this.state.updateStudent &&
//           <div className="editForm">
//           <form onSubmit={this.updateStudent}>
//                <TextField
//                 id='name'
//                 name='name'
//                 label='Full name'
//                 value={this.state.name || ''}
//                 onChange={this.updateStudent}
//                 />
//                 <TextField
//                   id='picture'
//                   name='picture'
//                   label='Add picture URL'
//                   value={this.state.picture || ''}
//                   onChange={this.updateStudent}
//                   />
//                 <Button
//                     type='submit'
//                     color="secondary"
//                     variant="raised"
//                     className="create-student"
//                     onSubmit={this.updateStudent}
//                 >
//                     Save
//                 </Button>
//            </form>
//         </div>


//         }

        
//       </div>
//     )
//   }
// }

// const mapStateToProps = function (state, props) {
//   return {
//     student: state.student,
//     batch: state.batch
//   }
// }

// export default connect(mapStateToProps, {updateStudent})(EditStudentForm)


// // import React, {PureComponent} from 'react'
// // import {connect} from 'react-redux'
// // import Button from 'material-ui/Button';
// // import TextField from 'material-ui/TextField'
// // import {updateStudent} from '../actions/students'

// // class EditStudentForm extends PureComponent {
// //   state = {}

// // //   updateStudent = (student) => {
// // //     this.props.updateStudent(this.props.match.params.id, student)
// // // }

// // handleSubmit = (e) => {
// //     e.preventDefault()
// //     this.props.onSubmit(this.state)
// // }

// // handleChange = (e) => {
// //     const {name, value} = e.target

// //     this.setState({
// //         [name] : value
// //     })
// //   };

// //   render() {
// //     const student = this.props.student
// //     return (
// //       <div>
// //           <div className="editForm">
// //           <form onSubmit={this.handleSubmit}>
// //                <TextField
// //                 id='name'
// //                 name='name'
// //                 label='Full name'
// //                 value={this.state.name || ''}
// //                 onChange={this.handleChange}
// //                 />
// //                 <TextField
// //                   id='picture'
// //                   name='picture'
// //                   label='Add picture URL'
// //                   value={this.state.picture || ''}
// //                   onChange={this.handleChange}
// //                   />
// //                 <Button
// //                     type='submit'
// //                     color="secondary"
// //                     variant="raised"
// //                     className="create-student"
// //                 >
// //                     Edit student
// //                 </Button>
// //            </form>
// //         </div>        
// //       </div>
// //     )
// //   }
// // }

// // const mapStateToProps = function (state, props) {
// //   return {
// //     student: state.student,
// //     batch: state.batch
// //   }
// // }

// // export default connect(mapStateToProps, {updateStudent})(EditStudentForm)

