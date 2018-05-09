import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4000'

export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_DETAILED_STUDENT = 'GET_DETAILED_STUDENT'
export const REMOVE_STUDENT = 'REMOVE_STUDENT'


    const newStudent = student => ({
        type: ADD_STUDENT,
        payload: student
    })

  export const addStudent = (student) => (dispatch) => {
      console.log(student)
    request
      .post(`${baseUrl}/students`)
      .send(student)
      .then(result => dispatch(newStudent(student)))
      .catch(err => console.error(err))
  }

  export const getStudents = (batchId) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    request
      .get(`${baseUrl}/studentsbyclass/${batchId}`)
      .then(result => 
        dispatch({
          type: GET_STUDENTS,
          payload: result.body
        }))
      .catch(err => console.error(err))
  }

  export const getStudent = (id) => (dispatch) => {
	request
	.get(`${baseUrl}/students/${id}`)
    .then(result => {
      dispatch({
        type: GET_DETAILED_STUDENT,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const deleteStudent = (id) => (dispatch) => {
    request
      .delete(`${baseUrl}/students/${id}`)
      .then(response => dispatch({
        type: REMOVE_STUDENT,
        payload: id
      }))
  }