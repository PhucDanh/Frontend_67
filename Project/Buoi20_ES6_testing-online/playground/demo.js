// ------------------- Truethy - Falsy ------------------- //
let a = 5;
if(0) {
    console.log("right");
}
// Falsy: 0, "", null, undefined, false. NaN
// Truethy: còn lại
console.log(1 && 0);
console.log(1 && "aaa");
console.log(true && 0);
console.log("" && "aaa");
console.log("" || 2);

// ------------------- Filter array function ------------------- //
var numbers = [2, 5, 1, 2, 3, 4];
var newArr = numbers.filter((item) => {return item > 2});
console.log(newArr);

// ------------------- import - export ------------------- //
// Note: 1 file html chỉ nên có 1 file javascript xử lý nó
// Note: export default chỉ dùng 1 lần trong 1 file: đặt tên tùy ý và không cần ""
export const name = "danh";
export const showMessage = () => {
    console.log("Hello world");
}