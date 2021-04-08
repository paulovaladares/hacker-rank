/*
Questions Marks

Have the function QuestionsMarks(str) take the str string parameter, 
which will contain single digit numbers, letters, and question marks, 
and check if there are exactly 3 question marks between every pair of two numbers 
that add up to 10. If so, then your program should return the string true, 
otherwise it should return the string false. If there aren't any two numbers 
that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true 
because there are exactly 3 question marks between 6 and 4, 
and 3 question marks between 5 and 5 at the end of the string.

Examples

Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true

Input: "9???1???9??1???9"
Output: false

Input: "5??aaaaaaaaaaaaaaaaaaa?5?5"
Output: false
*/

function getTags(str) {
  const match = str.replace(/[a-z]/g, "").matchAll(/(?<=\d)(\?{1,})(?=\d)/g);

  if (!match) return false;

  const items = [...match];

  function checkForFailCondition(arr, item) {
    const marksLength = item[0].length;
    const sumOfPair =
      parseInt(item["input"][item.index - 1]) +
      parseInt(item["input"][item.index + marksLength]);
    if (sumOfPair === 10) arr.push(marksLength === 3);
    return arr;
  }

  const filtered = items.reduce(checkForFailCondition, []);
  console.log(filtered);
  return filtered.length !== 0 && !filtered.includes(false);
}

console.log("acc?7??sss?3rr1??????5 :", getTags("acc?7??sss?3rr1??????5"));
console.log("arrb6???4xxbl5???eee5 :", getTags("arrb6???4xxbl5???eee5"));
console.log("ab6???4x??f?xbl5???e5 :", getTags("ab6???4x??f?xbl5???e5"));
console.log("aa6?9 :", getTags("aa6?9"));
console.log("aa6g9 :", getTags("aa6g9"));
console.log("9???1???9??1???9 :", getTags("9???1???9??1???9"));
console.log("5??aaaaaaaaaaaaaa?5?5 :", getTags("5??aaaaaaaaaaaaaa?5?5"));
