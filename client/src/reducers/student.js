import {GET_DETAILED_STUDENT, UPDATE_STUDENT} from '../actions/students'
import {LATEST_EVALUATION} from '../actions/evaluations'




export default function (state = {}, {type, payload}) {
	switch (type) {
		case GET_DETAILED_STUDENT:
			return payload

		case UPDATE_STUDENT:
			return payload

		case LATEST_EVALUATION:
            return {...state, latestEvaluation: payload.latestEvaluation}

		default:
      return state
	}
}
