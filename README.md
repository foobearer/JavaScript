# JavaScript Basics

## Statements
+ line of codes that are executed by the browser.
```javascript
    var foo = "foo bar";
```

**Conditional Statements**

   **if Statement** : is use when you want to execute a line of code only when a particular condition evaluates to true. 

```javascript
  if (condition) {
    statements
  }
```
   **if and else Statement** : is use when you want to execute a line of code when the same condition evaluates to false.
```javascript
  if (condition) {
    statement when the condition evaluates to true
  }
  else {
    statement when the condition evaluates to false
  }
```
   **switch Statement** : it marks a block of statements to be executed, depending on different cases.
```javascript
  switch (expression) {
    case value: statement-1
    break;
    case value: statement-2
    break;
    case value: statement-3
    break;
    case value: statement-4
    break;
    default: statement
  }
```
## Functions
+ an encapsulation of statements that can be run anywhere at any time.
```javascript
  function functionName (parameter-1, parameter-2) {
    statemets
  }
```

   **function declaration** : it defines a named function variable without requiring variable assignment. 
                              Function declaration must begin with "function".
```javascript
  function functionName () {
    statements
    return 
  }
```
   **function expression** : it defines a function as a part of a larger expression syntax (typically a variable assignment).
                             Function expression must not start with "function".
```javascript
//named function expression
  var name = function functionName () {
    statements
    return
  }
  
//anonymous function expression
  var name = function () {
    statements
    return
  }
  
//self invoking function 
  (function functionName() {
    statements
    return
  })();
```
