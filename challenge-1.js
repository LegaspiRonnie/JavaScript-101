const studentInfo = {
  fname: "Ronnie",
  lname: "Legaspi",
  age: 23,
  course: "BSIT",
  gender: "male"
}
const studentGrades = {
  HTML: 95,
  CSS: 89,
  JavaScript: 78
}
const merged = {...studentInfo, ...studentGrades}
const fullName = merged.fname + " " + merged.lname

console.log(`Name: ${fullName}`)
console.log(`Course: ${merged.course} \n`)

let keys = Object.keys(merged)
let values = Object.values(merged)
let pairs = Object.entries(merged)

console.log("Keys:")
for (let key of keys) {
  console.log(key)
}

console.log('')
console.log("Values:")
for (let value of values) {
  console.log(value)
}
  
// KEY VALUE PAIRS
console.log('')
console.log("Key-Value Pairs:")
for (let [key, value] of pairs) {
  console.log(key,":", value)
}

Object.assign(merged, {school: "University of Eastern Pangasinan"})
Object.assign(merged, {course: "Bachelor Of Sciece in Information Technology"})


const studentReports = () => {
  for (let [key, value] of Object.entries(studentInfo)) {
    console.log(`${key}: ${value}`)
  }
  let genAvg = calculateGenAvg()
  console.log('general average: ', genAvg)
}  
const calculateGenAvg = () => {
  let numOfSub = Object.keys(studentGrades).length
  let genAvg = 0
  for (let value of Object.values(studentGrades)) {
    genAvg += value
  }
  genAvg = genAvg / numOfSub
  return genAvg.toFixed(2)
  
}
const studGrades = () => {
  Object.keys(studentGrades).forEach(key => {
    console.log(key, ": ", studentGrades[key] )
  })
}
console.log("==== STUDENT REPORT ====")
studentReports()


console.log('')

console.log('Grades')
console.log('--------')
studGrades()





  
  
  
  
  
  
  