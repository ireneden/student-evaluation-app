import {GET_DETAILED_STUDENT} from '../actions/students'
import {ADD_NEW_EVALUATION} from '../actions/students'



export default function (state = {}, {type, payload}) {
	switch (type) {
		case GET_DETAILED_STUDENT:
			return payload

		default:
      return state
	}
}

export default function (state = {}, {type, payload}) {
	switch (type) {
		case ADD_NEW_EVALUATION:
			return payload

		default:
      return state
	}
}
