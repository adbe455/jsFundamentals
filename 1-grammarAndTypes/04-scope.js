// 7 Scope


// local scope: Indianapolis
// global scope: the world

/*scope refers to where a variable is defined and accessible.
    javascript has function scope: each function creates a new scope
    scope determines the visibility of these variables
    variables defined inside a function are not visible from outside
    the function
*/

// Var vs Let.
var x = 12;
function varTest() {
  var x = 33;
  if (1 == 2) {
    var x = 45;
    console.log(x);
  }
  console.log(x)
};
varTest();
console.log(x);
var x = 12;
function letTest() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log(x);
  }
  console.log(x);
}
letTest();
console.log(x);
function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log(scope);
  }
  console.log(scope);
}
constTest();