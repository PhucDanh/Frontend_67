// module
console.log("index");
import { name, showMessage } from "./demo.js";
// import { Student } from "./class.js";
import bbbb from "./class.js";

console.log(name);
showMessage();
// const newStudent = new Student();
const newStudent = new bbbb();
console.log(newStudent);