let fetch  = () => {
  return new Promise((response, reject) => {
    let data = true
    if (data === true) {
      response("success")
    } else if (data != true) {
      reject("rejected")
    } else {
      reject("Something wend wrong")
    }
    
  })
}
 const display = (data) => {
   console.log(data)
 }
fetch().then((response) => {
  console.log(response)
}).catch((reject) => {
  console.log(reject)
})