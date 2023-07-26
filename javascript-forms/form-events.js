function handleFocus(event) {
  console.log("The 'focus' event was fired.");
  console.log('Event target name:', event.target.name);
}

function handleBlur(event) {
  console.log("The 'blur' event was fired.");
  console.log('Event target name:', event.target.name);
}

function handleInput(event) {
  console.log('Event target name:', event.target.name);
  console.log('Event target value:', event.target.value);
}

const $usernameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageTextArea = document.querySelector('#user-message');

$usernameInput.addEventListener('focus', handleFocus);
$usernameInput.addEventListener('blur', handleBlur);
$usernameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$messageTextArea.addEventListener('focus', handleFocus);
$messageTextArea.addEventListener('blur', handleBlur);
$messageTextArea.addEventListener('input', handleInput);
