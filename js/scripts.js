// console.log(classroom);
// let classroom = 2;
//
// //why does js hoist things?
//
// let dozen = 12;
// {
//   console.log(dozen); // still log 12. the child inherit the parent value.
// }
// console.log(dozen);
//
// //not defined is BAD. undefined, not as bad.
// //var will get hoisted.
//
// //let is not hoisted. but will still work in child/nested. let cannot re-declare
// //or re-initialize a var or itself. and scoped to their block.
// //let was introduced because var didn't let you have private member. what if you
// //only want a variable to exist only in one block of data. let us hide value
// //from other scope. let can be used to check if a variable by the same name
// //has been used.
//
// const classroom = 4;
// console.log(classroom);
// const classroom = 4; //use var for a variable then use let to refine.
//
// //CONST are not hoisted. CONST should always be static. SHOULD NEVER CHANGE.
// //BLOCKED SCOPED; stuck. ONLY DECLARED once and not redeclared.
//

var name = "Vien Ngo";
let birthday = new Date('10/21/81');
const goal = "Be a millionaire";

console.log( name + birthday + goal); //string concatention
console.log( name, birthday, goal);
console.log(Date.UTC(birthday)); // all servers use UTC date stamp.

var example = Math.ceil(8.3); //ceil or floor to round up or down. (good for drawing)
console.log(example);
//Math.ceil  where math is the object and ceil is the method/fucnction.
