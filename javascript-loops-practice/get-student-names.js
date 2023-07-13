/* exported getStudentNames */
function getStudentNames(student) {
  const newArray = [];
  for (let i = 0; i < student.length; i++) {
    newArray.push(student[i].name);
  }
  return newArray;
}
