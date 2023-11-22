//when we can assign a default value in function parameters

function Add(p1 = 0, p2 = 0) {
  console.log(p1, p2)
  return p1+p2
}


console.log(Add(15,16)) // 31
console.log(Add(1)) // NaN - not a number
console.log(Add()) // undefined