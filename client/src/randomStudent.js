const studentsArray = [
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


export function calculateEvaluationsPercent(studentsArray) {
  const totalStudents = studentsArray.length
  const greenStudentsOnly = studentsArray.filter(student => student.evaluation === 'Green').length
  const yellowStudentsOnly = studentsArray.filter(student =>student.evaluation === 'Yellow').length
  const redStudentsOnly = studentsArray.filter(student => student.evaluation === 'Red').length
  const whiteStudentsOnly = studentsArray.filter(student => student.evaluation === 'White').length

  let greenPercent = (greenStudentsOnly/totalStudents * 100).toFixed(2)
  let yellowPercent = (yellowStudentsOnly/totalStudents * 100).toFixed(2)
  let redPercent = (redStudentsOnly/totalStudents * 100).toFixed(2)
  let whitePercent = (whiteStudentsOnly/totalStudents * 100).toFixed(2)

  return {
    greenStudents: greenPercent,
    yellowStudents: yellowPercent,
    redStudents: redPercent,
    whiteStudents: whitePercent
  }
}

export function chooseRandomStudent(studentsArray) {
  const greenStudentsOnly = studentsArray.filter(student => student.evaluation === 'Green')
  const yellowStudentsOnly = studentsArray.filter(student =>student.evaluation === 'Yellow')
  const redStudentsOnly = studentsArray.filter(student => student.evaluation === 'Red')
  const whiteStudentsOnly = studentsArray.filter(student => student.evaluation === 'White')

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

