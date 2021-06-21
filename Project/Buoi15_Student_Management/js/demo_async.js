// // synchronous: đồng bộ
// var a = 5;
// var b = 10;
// var sum = a + b;
// console.log(sum);
// console.log(a);

// // asynchronous: bất đồng bộ
// var showMessage = function() {
//     console.log("a");
// }
// setTimeout(showMessage,2000);  
// setTimeout(function() {
//     console.log("b");
// }, 4000); 
// setTimeout(function() {
//     console.log("d");
// }, 0); 
// console.log("c");

// // trong javascript ưu tiên chạy code synchronous sau đó mới chạy code asynchronous
