import {GET_DETAILED_CLASS} from '../actions/classes'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case GET_DETAILED_CLASS:
			return payload

		default:
      return state
	}}

