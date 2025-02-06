function foo(a, b) {
  // Handle missing arguments explicitly.
  b = typeof b !== 'undefined' ? b : 0; //default value
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1));    // Output: 1