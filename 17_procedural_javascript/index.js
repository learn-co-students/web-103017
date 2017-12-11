console.warn('I\'m a script loaded from outside of the html page!');
// SCOPE (aka Variable Scope)
  //  Global: exists on the global object. In the browser, exists on `window`.
  //  Lexical (var): function scope. Exists only in current function scope.
  //  Block (let): block [curly braces except on objects] scoped. Reassignable.
  //  Constant (const): block scoped. Not reassignable.
    global = 'something'
    var lexical = 'something'
    let blockVariable = 'something'
    const blockConstant = 'something'

    // Before 2015 or so, we only had globals and vars. Globals behave
    // unexpectedly in every  programming language, and vars in JavaScript
    // created problem with unexpected overwriting scope and silent errors.
    // PREFER CONST, THEN LET INSTEAD OF USING VARS OR GLOBALS.


// CONTROL FLOW
  // JavaScript, like Ruby, has loops, conditionals, and functions with return
  // values. The main difference here is syntactical instead of conceptual.
  // We use C-style loops and conditional branching.
  if (blockVariable === blockConstant) {
    console.log('Your variable and your constant have the same value.');
  } else {
    console.log('Your variable and your constant have different values.');
  }

  const constants = [];
  for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
    constants.push(blockConstant);
  }
  console.log(`Your loop iterated ${constants.length} time(s).`);


// DATA TYPES
  // String ("", '', `${interpolation}`)
  console.log("hello");
  console.log('it\'s me');
  console.log(`i've been ${blockConstant}...`);

  // Number (NaN, 1, 1.3, 1.2e3)
  console.log(NaN)
  console.log(1)
  console.log(1.3)
  console.log(1.2e3)

  // Object (function, array [array], polo - plain old js objects {hash})
  console.log({})
  console.log([])
  console.log(function x() {})

  // undefined (not yet assigned, don't assign to this value)
  console.log(undefined)

  // null (nothing - no value - not zero - not false - nothing)
  console.log(null)

  // Boolean (true, false)
  console.log(true)
  console.log(false)

  // Symbol (Symbol('name'))
  console.log(Symbol('name'))


// OBJECTS
  // Very similar to Ruby hashes. Key-value pairs. Values can be accessed
  // through bracket notation or dot notation.
  const obj = {bracket: 'bracket notation', dot: 'dot notation'}
  console.log(obj["bracket"]);
  console.log(obj.dot);


// ARRAYS
  // Work just like Ruby arrays with different method names.
  let arr = []
  console.log('empty array', arr);
  arr.push('ele')
  arr.push('remove me!')
  console.log('after push', arr);
  arr.pop()
  console.log('after pop', arr);
  arr.unshift('remove me again!')
  console.log('after unshift', arr);
  arr.shift()
  console.log('after shift', arr);
  arr.splice(0, 1)
  console.log('after splice', arr);
  console.log('array is empty?', arr.length === 0);


// FUNCTIONS
  // LEXICAL SCOPE
  // JavaScript functions create a new scope every time they are defined. This
  // level of scope is called lexical scope, or function scope. In this example
  // we have a variable defined in the outer scope and the inner scope.
  const outerVar = 'i\'m outside!'
  function scopedVarFn() {
    const innerVar = 'i\'m inside!'
    console.log(outerVar);
    console.log(innerVar);
  }

  try {
    console.log(outerVar);
    console.log(innerVar);
  } catch (e) {
    console.warn('Tried to log a variable not in scope');
    console.warn(e)
  }

  // NAMED AND UNNAMED
  // Functions are one of the biggest differences between Ruby and JavaScript.
  // In Ruby, we define methods that are attached to an object. In JavaScript,
  // methods don't need to be part of an object, but can exist on their own.
  // This is the basis for the term `first-class functions`, which just means
  // that functions exist at the same level of any other data type.
  function namedFn() { console.log('I have a name!') }
  namedFn()

  const variableFn = function() { console.log('I\'m named by my variable name') }
  variableFn()

  // EXPLICIT RETURNS
  // In JavaScript, except in one case that we'll cover in the future, there are
  // no implicit returns. If your function needs to expose a value to the outer
  // scope, then your function needs a `return` keyword.
  function returnFn() { return true; }
  console.log('The return value of namedFn is', namedFn());
  console.log('The return value of returnFn is', returnFn());

  // HIGHER ORDER FUNCTIONS
  // Given these two differences between Ruby and JavaScript, we can open up new
  // possibilities for working with dynamic functions. That is, since functions
  // can return values, and functions also exist like any other value, functions
  // can accept other functions as arguments and can return new functions as well.
  function acceptFunctionFn(otherFn) {
    return otherFn();
  }

  function returnFunctionFn(adj) {
    return function(name) {
      return `${name} is ${adj}!`
    }
  }

  console.log(acceptFunctionFn(returnFn));
  console.log(returnFunctionFn('awesome')('steven'));

  // IIFE (Immediately-invoked function expression)
  // Functions can also be defined and invoked immediately. We do this when we
  // want to create a new lexical scope for one-time use during the lifetime of
  // our program.
  (function() {
    const innerVar = 'inside the private scope';
    console.log(innerVar)
  })()

  // CLOSURES
  // Lastly, JavaScript functions can exist as closures, which are functions
  // that are using or have captured some values from their outer scope, even
  // if the outer scope no longer exists.
  function closureFn() {
    let counter = 0;
    return function increment() {
      console.log(counter++);
      return increment
    }
  }

  const inc = closureFn()
  inc()
  inc()
  inc() // prints out 1 - 3


// DEBUGGER
  // Lastly it's important to get used to using the JavaScript console in the
  // browser, and included in this is the debugger. The debugger allows us to
  // pause the execution of our program and to test it in whatever state it's in
  // at that moment. There's an error in the following function. Use the debugger
  // to pause the function when it's executed and figure out what's wrong.

  // USEFUL SHORTCUTS
  //    cmd + ;     Step through program
  //    cmd + \     Unpause the program

  function buggyFn() {
    debugger
    const fn = (function() {
      return 'hello'
    })()
    return fn()
  }
