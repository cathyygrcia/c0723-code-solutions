/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const restLetters = word.slice(1).toLowerCase();
  return firstLetter + restLetters;
}
