let cart = ["Bread", "Milk", "Eggs"]
cart.push("Nuts")
cart.unshift("Apple")
cart.pop()
cart.shift()
cart.join(', ')

const [firstItem, secondItem, thirdItem] = cart
console.log("First Item: ", firstItem)
console.log("Second Item: ",secondItem)

const discountedItems = ["Apples", "Bananas"]

cart = [...cart, ...discountedItems]

for (let i = 0; i < cart.length; i++) {
  console.log(cart[i])
}
for (let value of cart) {
  console.log(value)
}
cart.forEach(item => {
  console.log(item)
})

console.log('\n\n --------------Final Output-------------- \n\n')

cart.push("Rice")
cart.unshift("Butter")
const displayCart = () => {
  console.log('Removed Last Item:')
  console.log(cart.pop(), '\n')
  
  console.log('Removed First Item:')
  console.log(cart.shift(), '\n')
  
  console.log("Current cart: ")
  cart.pop()
  cart.pop()
  console.log(cart.join(','), '\n') 
  
  const [firstItem, secondItem, thirdItem] = cart
  console.log(`First Item: ${firstItem}`)
  console.log(`Second Item: ${secondItem} \n`)
  
  console.log(`Final Shoppine Cart`)
  console.log('-------------------')
  const finalCart = [...cart, ...discountedItems]
  for (let value of finalCart) {
    console.log(value)
  }
  
}

displayCart()
console.log('\n\n\n\n\n')











