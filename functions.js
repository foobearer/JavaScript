//function declaration
function foo() {
  return arguments[0] + arguments[1];
}
foo(2, 4);

//Named function expression
var foo = function bar() {
  return "Hello foo";
}
foo();

//Anonymous function expression
var foo = function() {
  return arguments[0] + " " + arguments[1];
}
foo("foo","bar");

//self invoking function
(function foo() {
  return "foo bar";
})();