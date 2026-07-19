// Destructure
let obj = {
  name: "Ronnie",
  age: 23,
  gender: "male"
  
}
// forEach Loop 
let keys = Object.keys(obj)
keys.forEach(key => {
  console.log(`${key}`, obj[key])
})

// for loop
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log( Object.keys(obj)[i], Object.values(obj)[i])
}


// for in
for (let i in Object.keys(obj)) {
  console.log(obj[Object.keys(obj)[i]])
}

// for of
let objKeys = Object.entries(obj)
// for (let value of objKeys) {
//   console.log(obj[value])
// }


for (const [key, value] of objKeys) {
  console.log(value)
}









