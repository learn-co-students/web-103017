# Document Object Model

## Objectives
* The Document Object Model
    * HTML Source v DOM
      * Viewing
        * View HTML source by right-clicking page and selecting 'View Page Source' from context menu
        * View DOM by going to developer tools and clicking the 'Elements' tab
      * HTML Source is the string of HTML that is returned from a server somewhere on the internet. The DOM is the hierarchy of objects that JavaScript composes after it parses the HTML Source
* CSS Selectors (brief)
    * Individual selectors
      * Class `.some-class`
      * Id `#some-id`
      * Tag `body`
      * Psuedo-selector (Not for DOM) `::first-child`
    * Combining selectors
      * Space between `#parent .child`
      * Chain `div.image.highlighted`
* Selecting DOM nodes
    * Understand types that are returned from selecting a DOM node with JavaScript
    * Understand how to use CSS selectors
    * Methods
      * `node.querySelector('#unique-element')`
      * `node.querySelectorAll('.some-shared-class')`
      * `node.getElementsByTagName('body')[0]`
      * `node.getElementsById('unique-element')`
      * `node.getElementsByClassName('some-shared-class')`
* Modifying DOM nodes
    * Storing node in a variable `let body = document.querySelector('body')`
    * Changing attributes `body.style.backgroundColor = red`
    * Removing `document.removeChild(body)`
* Creating DOM objects
    * `let element = document.createElement('img')`
    * `element.src = 'http://www.coooolimage.com'`
    * `document.body.appendChild(element)`

## Activity
* Go to your favorite website and modify the DOM programmatically
  * Select elements - save to variable
  * Delete elements - delete at least 2
  * Modify elements - replace image url
  * Create elements and add to page - how do we do this?

## Notes
* Coercion of array-like objects into arrays
  * let arr = Array.prototype.slice.call(arrayLikeObject)
  * let arr = [...arrayLikeObject]
* How to tell a NodeList from an Array?
  * <obj>.constructor`
