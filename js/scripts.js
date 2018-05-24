// // console.log(classroom);
// // let classroom = 2;
// //
// // //why does js hoist things?
// //
// // let dozen = 12;
// // {
// //   console.log(dozen); // still log 12. the child inherit the parent value.
// // }
// // console.log(dozen);
// //
// // //not defined is BAD. undefined, not as bad.
// // //var will get hoisted.
// //
// // //let is not hoisted. but will still work in child/nested. let cannot re-declare
// // //or re-initialize a var or itself. and scoped to their block.
// // //let was introduced because var didn't let you have private member. what if you
// // //only want a variable to exist only in one block of data. let us hide value
// // //from other scope. let can be used to check if a variable by the same name
// // //has been used.
// //
// // const classroom = 4;
// // console.log(classroom);
// // const classroom = 4; //use var for a variable then use let to refine.
// //
// // //CONST are not hoisted. CONST should always be static. SHOULD NEVER CHANGE.
// // //BLOCKED SCOPED; stuck. ONLY DECLARED once and not redeclared.
// //
//
// // var name = "Vien Ngo";
// // let birthday = new Date('10/21/81');
// const goal = "Be a millionaire";
// const obj = new String ("Be a millionare");
//
//
// console.log(goal);
// console.log(obj);
// console.log(obj.length, goal.length); //typeof() to check the type
// typeof obj //use to check the type of the varible.
//
// // console.log( name + birthday + goal); //string concatention
// // console.log( name, birthday, goal);
// // console.log(Date.UTC(birthday)); // all servers use UTC date stamp.
// //
// // var example = Math.ceil(8.3); //ceil or floor to round up or down. (good for drawing)
// // console.log(example);
// //Math.ceil  where math is the object and ceil is the method/fucnction.
//
// //the difference better a string primitive and a string object is
//
// //New make the variable from the primitive into an OBJECT. primitve vs object
// //if it's an object, you probably did a new method.
//
// let chores = ['feed the dog', 'try not to kill the cat', 43, [1, 4, 5]];
// //above is an example of an arrary. any value can be in an array, even another array.
//
// //AN object has {} and a key (name) and value (Ryeker) seaprated by colon.
// const use = {
//   name:"Ryeker",
//   password: "1234"
// };
//
// // Basic interactions with JS, alert, conftirm and prompt
//
// alert(chores); //nothing to collect; one way traffic.
// var userAnswer = confirm("Did you sleep?"); //control flow
// var userAnswer1 = prompt("did you brush your teeth?", "yes");

let favMovie = "2046";
let favFood = "curry";

const favMovieYear ="2006";
const favFoodIngri = ['rice', ' potatoes', ' spices']

alert("My favorite food is " + favFood + " which is made of " + favFoodIngri);
let userAnswer = confirm("Is your favorite movie " + favMovie + " that came out in " + favMovieYear +"?")
