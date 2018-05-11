import { RANDOMIZE_STUDENT } from '../actions/students'

export default function (state = {}, {type, payload}) {
    
  switch (type) {
  case RANDOMIZE_STUDENT:
    return payload

  default:
    return state
  }
}