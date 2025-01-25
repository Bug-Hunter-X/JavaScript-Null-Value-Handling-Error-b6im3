function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return a default value or handle the null case appropriately
  }
  return a + b; // Perform the operation only if a and b are not null
}
//Test Cases
console.log(foo(5, 10)); //15
console.log(foo(null, 10)); //0
console.log(foo(5, null));  //0
console.log(foo(null, null));//0