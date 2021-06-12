// -------------------------------------------------
//            ~ New Logical Operators ~
// - Javascript new tricks
// - Does not work with npm yet
// - Does not work in REPL mode
// - Works on browser console
// -------------------------------------------------

let a = 9;
let b = 2;
a &&= b;

// Same as
// if (a) {
//   a = b;
// }

console.log(a); // output for variable 'a' would be 2.

// -------------------------------------------------

let c = 1;
let d = 2;

c ||= d;

// Same as
// if (!a) {
//   a = b;
// }

console.log(c); // output for variable 'c' would be 1.

// -------------------------------------------------

let e;
let f = 2;
e ??= f;

// this code block is similar to the code given above.
// if(a === null || a === undefined) {
//   a = 1
// }

console.log(e); // output for variable 'e' would be 2.

// -------------------------------------------------
//            ~ String ‘replaceAll’ method ~
// - Javascript new tricks
// - Does not work with npm yet
// - Does not work in REPL mode
// - Works on browser console
// -------------------------------------------------
