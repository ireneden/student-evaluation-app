const studentsArray = [
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

export function chooseRandomStudent(studentsArray) {
const greenStudentsOnly = studentsArray.filter(student => student.evaluation === 'green')
const yellowStudentsOnly = studentsArray.filter(student =>student.evaluation === 'yellow')
const redStudentsOnly = studentsArray.filter(student => student.evaluation === 'red')

const greenWeight = 0.19
const yellowWeight = 0.28
const redWeight = 0.53
  
const randomNumber = Math.random()
if (randomNumber <= greenWeight) {
  return greenStudentsOnly[Math.floor(Math.random() * greenStudentsOnly.length)]
} else if (randomNumber < greenWeight + yellowWeight) {
  return yellowStudentsOnly[Math.floor(Math.random() * yellowStudentsOnly.length)]
} else {
  return redStudentsOnly[Math.floor(Math.random() * redStudentsOnly.length)]
}
}
