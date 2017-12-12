# Functional Programming
* **Declarative** versus **imperative**
  * Imperative (procedural)
    * _How_ to do some operation
    * Based on statements `if`, `for`, `switch`
  * Declarative
    * _What_ operations to do
    * Based on expressions which resolve to a value
* **Pure functions**
  * Given the same inputs, always returns the same output
  * Has no **side-effects**, doesn't change anything in the program
    * Modifying any external variable or object property
    * Logging to the console
    * Writing to the screen
    * Writing to a file
    * Writing to the network
    * Triggering any external process
    * Calling any other functions with side-effects
  * Avoid **shared state**
    * Don't use variables/data from outside of function
  * Avoid **mutating state**
    * Shallow immutability: `Object.freeze`
    * Creating new objects: `Object.assign`
* **Higher-order functions** and reusability
  * Abstract or isolate actions, effects, or async flow control using callback functions, promises
  * Create utilities which can act on a wide variety of data types (think functional library)
  * **Partial application** of a function to its arguments or create a **curry**-able function for the purpose of reuse or function composition
  * Take a list of functions and return some composition of those input functions
* Function **composition**
  * Combine two or more functions to perform some computation
    * `f(g(x))`
  * Combine two or more functions to produce a new function
    * `f(g)(x) === f(g(x))`
* Anonymous Functions
* Memoization
* Recursion
* Currying
