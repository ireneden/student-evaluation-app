import {ADD_CLASS, GET_CLASSES} from '../actions/classes'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_CLASSES:
      return payload
        
    case ADD_CLASS:
      return [...state, payload]
      default:
      return state
     }  
    }