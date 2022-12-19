let students = [
{
 name: "Roberto",
 firstGrade: 5,
 secondGrade: 8,
avg: 6.5,
},

{
name: "Ribamar",
firstGrade: 7,
secondGrade: 3,
avg: 5,
},

{
name: "Amanda",
firstGrade: 4,
secondGrade: 10,
avg: 7,
},
]

function average (student){
  return`A média do(a) aluno(a) ${student.name} é: ${((student.firstGrade) + (student.secondGrade)) / 2}  
  `
}

for (let student of students)
{
let studentsMsg = average(student)
alert (studentsMsg)
}

