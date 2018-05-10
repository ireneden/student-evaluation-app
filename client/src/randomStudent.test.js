import React from 'react'
import { shallow } from 'enzyme'
import {chooseRandomStudent, calculateEvaluationsPercent} from './randomStudent.js'


describe('chooseRandomStudent', () => {
  const test = [
      { student: 'student1', evaluation: 'Green' },
      { student: 'student2', evaluation: 'Green' },
      { student: 'student3', evaluation: 'Yellow' },
      { student: 'student4', evaluation: 'Yellow' },
      { student: 'student5', evaluation: 'Yellow' },
      { student: 'student6', evaluation: 'Red' },
      { student: 'student7', evaluation: 'Red' },
      { student: 'student8', evaluation: 'Red' },
      { student: 'student9', evaluation: 'Red' }
    ]
  it('returns a defined', () => {
    expect(chooseRandomStudent(test)).toBeDefined()
  })
})


describe('chooseRandomStudent', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Green' },
        { student: 'student3', evaluation: 'Yellow' },
        { student: 'student4', evaluation: 'Yellow' },
        { student: 'student5', evaluation: 'Yellow' },
        { student: 'student6', evaluation: 'Red' },
        { student: 'student7', evaluation: 'Red' },
        { student: 'student8', evaluation: 'Red' },
        { student: 'student9', evaluation: 'Red' },
        { student: 'student9', evaluation: 'White' },
      ]
    it('returns a defined even when White color is present', () => {
      expect(chooseRandomStudent(test)).toBeDefined()
    })
  })


  describe('chooseRandomStudent', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Green' },
        { student: 'student3', evaluation: 'Yellow' },
        { student: 'student4', evaluation: 'Yellow' },
        { student: 'student5', evaluation: 'Yellow' },
        { student: 'student6', evaluation: 'Red' },
        { student: 'student7', evaluation: 'Red' },
        { student: 'student8', evaluation: 'Red' },
        { student: 'student9', evaluation: 'Red' },
        { student: 'student9', evaluation: 'White' },
      ]
    it('returns an object', () => {
      expect(chooseRandomStudent(test)).toBeObject
    })
  })


  describe('calculateEvaluationsPercent', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Yellow' },
        { student: 'student3', evaluation: 'Red' },
        { student: 'student4', evaluation: 'White' },
    ]

    it('returns the correct percentage of 1/4 per color', () => {
      expect(calculateEvaluationsPercent(test)).toEqual({ greenStudents: 25, yellowStudents: 25, redStudents: 25, whiteStudents: 25 })
    })
  })
  

  describe('greenStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Green' },
        { student: 'student3', evaluation: 'Yellow' },
        { student: 'student4', evaluation: 'Yellow' },
        { student: 'student5', evaluation: 'Yellow' },
        { student: 'student6', evaluation: 'Red' },
        { student: 'student7', evaluation: 'Red' },
        { student: 'student8', evaluation: 'Red' },
        { student: 'student9', evaluation: 'Red' },
      ]
    const greenStudentsOnly = test.filter(student => student.evaluation === 'Green')
    it('returns an array with the wanted color', () => {
        expect(greenStudentsOnly).toEqual([{ student: 'student1', evaluation: 'Green' }, { student: 'student2', evaluation: 'Green' }]);
    })
  })


  describe('yellowStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Green' },
        { student: 'student3', evaluation: 'Yellow' },
        { student: 'student4', evaluation: 'Yellow' },
        { student: 'student5', evaluation: 'Yellow' },
        { student: 'student6', evaluation: 'Red' },
        { student: 'student7', evaluation: 'Red' },
        { student: 'student8', evaluation: 'Red' },
        { student: 'student9', evaluation: 'Red' },
      ]
    const yellowStudentsOnly = test.filter(student => student.evaluation === 'Yellow')
    it('returns an array with the wanted color', () => {
        expect(yellowStudentsOnly).toEqual([{ student: 'student3', evaluation: 'Yellow' },{ student: 'student4', evaluation: 'Yellow' },{ student: 'student5', evaluation: 'Yellow' }]);
    })
  })


  describe('redStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'Green' },
        { student: 'student2', evaluation: 'Green' },
        { student: 'student3', evaluation: 'Yellow' },
        { student: 'student4', evaluation: 'Yellow' },
        { student: 'student5', evaluation: 'Yellow' },
        { student: 'student6', evaluation: 'Red' },
        { student: 'student7', evaluation: 'Red' },
        { student: 'student8', evaluation: 'Red' },
        { student: 'student9', evaluation: 'Red' },
      ]
    const redStudentsOnly = test.filter(student => student.evaluation === 'Red')
    it('returns an array with the wanted color', () => {
        expect(redStudentsOnly).toEqual([{ student: 'student6', evaluation: 'Red' },{ student: 'student7', evaluation: 'Red' },{ student: 'student8', evaluation: 'Red' },{ student: 'student9', evaluation: 'Red' }]);
    })
  })
  

