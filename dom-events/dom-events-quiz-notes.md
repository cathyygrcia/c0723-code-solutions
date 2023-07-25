# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging purposes

- What is the purpose of events and event handling?
  create interactive and dynamic user experiences.

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener()

- What is a callback function?
  function passed into another function as an argument, which is then ivoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  Event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  a property that refers to the DOM element on which the event was triggered. you can check the console.log(event.target)
  MDN

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick)
  passes as a reference to the event listener.
  the handleClick function will be called but the function is ivoked later when the event happens.
  ```
  ```js
  element.addEventListener('click', handleClick())
  calls the funciton immediately
  ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
