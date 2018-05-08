import * as request from 'superagent'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4000'

export const ADD_CLASS = 'ADD_CLASS'
export const GET_CLASSES = 'GET_CLASSES'
// export const GET_DETAILED_CLASS = 'GET_DETAILED_CLASS'


const newClass = batch => ({
    type: ADD_CLASS,
    payload: batch
  })

  export const addClass = (batch) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    request
      .post(`${baseUrl}/classes`)
      .send(batch)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(newClass(batch)))
      .catch(err => console.error(err))
  }

  export const getClasses = () => (dispatch, getState) => {
   const state = getState()
   const jwt = state.currentUser.jwt

    request
      .get(`${baseUrl}/classes`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch({
          type: GET_CLASSES,
          payload: result.body
        }))
      .catch(err => console.error(err))
  }
