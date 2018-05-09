import React from 'react'
import { shallow } from 'enzyme'
import {chooseRandomStudent} from './randomStudent.js'




describe('chooseRandomStudent', () => {
    const test = [
        { student: 'student1', evaluation: 'green' },
        { student: 'student2', evaluation: 'green' },
        { student: 'student3', evaluation: 'yellow' },
        { student: 'student4', evaluation: 'yellow' },
        { student: 'student5', evaluation: 'yellow' },
        { student: 'student6', evaluation: 'red' },
        { student: 'student7', evaluation: 'red' },
        { student: 'student8', evaluation: 'red' },
        { student: 'student9', evaluation: 'red' },
      ]
    it('returns a defined', () => {
      expect(chooseRandomStudent(test)).toBeDefined()
    })
  })

  describe('greenStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'green' },
        { student: 'student2', evaluation: 'green' },
        { student: 'student3', evaluation: 'yellow' },
        { student: 'student4', evaluation: 'yellow' },
        { student: 'student5', evaluation: 'yellow' },
        { student: 'student6', evaluation: 'red' },
        { student: 'student7', evaluation: 'red' },
        { student: 'student8', evaluation: 'red' },
        { student: 'student9', evaluation: 'red' },
      ]
    const greenStudentsOnly = test.filter(student => student.evaluation === 'green')
    it('returns an array with the wanted color', () => {
        expect(greenStudentsOnly).toEqual([{ student: 'student1', evaluation: 'green' }, { student: 'student2', evaluation: 'green' }]);
    })
  })

  describe('yellowStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'green' },
        { student: 'student2', evaluation: 'green' },
        { student: 'student3', evaluation: 'yellow' },
        { student: 'student4', evaluation: 'yellow' },
        { student: 'student5', evaluation: 'yellow' },
        { student: 'student6', evaluation: 'red' },
        { student: 'student7', evaluation: 'red' },
        { student: 'student8', evaluation: 'red' },
        { student: 'student9', evaluation: 'red' },
      ]
    const yellowStudentsOnly = test.filter(student => student.evaluation === 'yellow')
    it('returns an array with the wanted color', () => {
        expect(yellowStudentsOnly).toEqual([{ student: 'student3', evaluation: 'yellow' },{ student: 'student4', evaluation: 'yellow' },{ student: 'student5', evaluation: 'yellow' }]);
    })
  })

  describe('redStudentsOnly', () => {
    const test = [
        { student: 'student1', evaluation: 'green' },
        { student: 'student2', evaluation: 'green' },
        { student: 'student3', evaluation: 'yellow' },
        { student: 'student4', evaluation: 'yellow' },
        { student: 'student5', evaluation: 'yellow' },
        { student: 'student6', evaluation: 'red' },
        { student: 'student7', evaluation: 'red' },
        { student: 'student8', evaluation: 'red' },
        { student: 'student9', evaluation: 'red' },
      ]
    const redStudentsOnly = test.filter(student => student.evaluation === 'red')
    it('returns an array with the wanted color', () => {
        expect(redStudentsOnly).toEqual([{ student: 'student6', evaluation: 'red' },{ student: 'student7', evaluation: 'red' },{ student: 'student8', evaluation: 'red' },{ student: 'student9', evaluation: 'red' }]);
    })
  })
  

