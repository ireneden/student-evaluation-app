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

export function chooseRandomStudent(students) {

  const greenWeight = 0.19
  const yellowWeight = 0.28
  const redWeight = 0.53
  
  let colours=""
  const randomColor = Math.random()
  if (randomColor <= greenWeight) {
   colours="Green"
  } else if (randomColor < greenWeight + yellowWeight) {
   colours="Yellow"
  } else {
   colours="Red"
  }

  let studentArray = students.filter(student => student.latestEvaluation === colours) 
  // console.log(studentArray)
  let randomStudent = studentArray[Math.floor(Math.random()*students.length)]
  if (randomStudent === undefined) return null
  return randomStudent
}




