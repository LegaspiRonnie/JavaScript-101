let myName = {
  id: 1,
  fname: "Ronnie",
  lname: "Legaspi",
  age: 23,
  gender: "male"
}

let address = {
  street: "Villegas",
  city: "Pozorrubio",
  provice: "Pangasinan",
  country: "Philippines"
}

let user = {...myName, ...address}
const findUserById = (id) => {
  if (user.id == id) {
    return user;
  } else {
    return "none"
  }
}
findUserById(1)