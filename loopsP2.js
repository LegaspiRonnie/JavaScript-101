let arr = ["Ronnie", 23, "Male"]
// Destructuring
const [name, age, gender] = arr
// Spread Operators
const arr2 = [...arr]
const arr3 = [...arr, ...arr2]

// forEach
arr3.forEach((value, index) => {
  console.log(`${index}. ${value}`)
})

// for loop 
let arrlength = arr3.length
for (let i = 0; i < arrlength; i++) {
  console.log("index ",i,  arr3[i])
}

// for in 
for (let i in arr3) {
  if (i == 3){
    break;
  }
  console.log(arr3[i])
}

for (let value of arr3) {
  console.log("Value: ", value)
}







