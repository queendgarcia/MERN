// Overloading -- same name function with different number of params or type of params

// We have no concept of overloading in JS functions, only have overwriting

function Sum(a,b) {
  console.log(a,b + " 2 params");
  return a + b;
}

// overwrites the declared Sum function above; technically, it expects 3 parameters
function Sum(a,b,c) {
  console.log(a,b,c + " 3 params");
  return a+b+c;
}

console.log(Sum(2,3)); //return value: NaN -- since 2+3+undefined
console.log(Sum(2,3,4)); // works properly; return -> 9