// let displayName = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Ronnie")
//         }, 3000)
//     })
// }
// let displayAge = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(23)
//         }, 5000)
//     })
// }
// let displayGender = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Male")
//         }, 6000)
//     })
// }


// const displayInfo = async () => {
//     console.log("Name: ", await displayName())
//     console.log("Age: ", await displayAge())
//     console.log("Gender: ", await displayGender())
// }


// displayInfo()

const fakeData = {
  City: "Manila",
  Temperature: "31C",
  Condition: "Sunny",
  Humidity: "72%"
}
const fakeAPI = () => {
  return  new Promise((fromResolve, fromReject) => {
    const data = fakeData
    if (data) {
      return fromResolve(data)
    } else {
      return fromReject("Failed", data)
    }
  })
  
}

fakeAPI().then((data) => {
  console.log(data)
}).catch((data) => {
  console.log(data)
})