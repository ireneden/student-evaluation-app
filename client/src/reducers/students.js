import {ADD_STUDENT, GET_STUDENTS, REMOVE_STUDENT} from '../actions/students'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_STUDENTS:
    return payload
        
    case ADD_STUDENT:
    return [...state, payload]
     
    case REMOVE_STUDENT:
    return state.splice(payload.id)

    default:
    return state   
    }  
  }


