# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The element on which an event is triggered.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of event bubbling.

- What DOM element property tells you what type of element it is?
  event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?
  selector string and returns the closest ancestor of the element

- How can you remove an element from the DOM?
  .remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Event Delegation - add a single event listener to a parent element that will handle events for its children

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
