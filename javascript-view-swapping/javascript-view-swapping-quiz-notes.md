# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the DOM element on which the event was triggered

- What is the affect of setting an element to `display: none`?
  it makes the element invisible, removes it from the document flow

- What does the `element.matches()` method take as an argument and what does it return?
  CSS selector and returns a boolean

- How can you retrieve the value of an element's attribute?
  getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?
  When you begin querying the DOM

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  You would need to add individual event listeners to each tab element.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  you would need to create individual event listeners for each tab and manually toggle the visibility of the corresponding views.

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
