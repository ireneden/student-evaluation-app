import * as request from 'superagent'


export const ADD_NEW_EVALUATION = 'ADD_NEW_EVALUATION'
export const GET_EVALUATIONS = 'GET_EVALUATIONS'
export const LATEST_EVALUATION = 'LATEST_EVALUATION'


const baseUrl = 'http://localhost:4000'


export const addNewEvaluation = (evaluation) => (dispatch) => {
    console.log(evaluation)
    request
    .post(`${baseUrl}/evaluations`)
    .send(evaluation)
    .then(result => {
        dispatch({
            type: ADD_NEW_EVALUATION,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
}


export const getEvaluations = (studentId) => (dispatch) => {
	request
	.get(`${baseUrl}/evaluationsbystudent/${studentId}`)
    .then(result => {
      dispatch({
        type: GET_EVALUATIONS,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const latestEvaluation = (studentId, update) => (dispatch) => {
    request
      .put(`${baseUrl}/students/${studentId}`)
      .send({latestEvaluation: update.evaluation})
      .then(result => {
        dispatch({
          type: LATEST_EVALUATION,
          payload: result.body
        })
      })
      .catch(err => console.error(err))
  
  }
