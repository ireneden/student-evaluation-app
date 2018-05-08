import {GET_DETAILED_STUDENT} from '../actions/students'


export default function (state = {}, {type, payload}) {
	switch (type) {
		case GET_DETAILED_STUDENT:
			return payload

		default:
      return state
	}
}