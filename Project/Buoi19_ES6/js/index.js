//----------------- 1. Let, let & const -----------------//
/*
    Phân biệt sự khác biệt giữa let và let
        + Khi khai báo bằng từ khóa let thì trong phạm vi 1 scope không được khai báo trùng tên biến. Đối với let thì giá trị biến sau sẽ đè lên giá trị biến trước 
        + Phạm vi hoạt động của let là trên từng scope còn của let là trên toàn scope
        + Lưu ý trong ES6 nên dùng let cho tất cả trường hợp
        + Khi khai báo biến bằng từ khóa const: phạm vi hoạt động giồng let nhưng không gán giá trị lại
        + Đối với const object: không thể gán bằng object khác tuy nhiên vẫn có thể thay đổi giá trị các key trong object => Vì bản chất object giống pointer chỉ lưu trữ địa chỉ đối tượng
 */

let hoTen = "Nguyen Van A";
{
    let hoTen = "Tran Van C";
    console.log(hoTen);
}
console.log(hoTen);

// Định nghĩa sự kiện cho các button số
// arrayButton = [button1, buttton2, button3]
// Mỗi vòng for là 1 scope riêng biệt
let arrButton = document.querySelectorAll("button");
console.log(arrButton);
for(var i = 0; i < arrButton.length; i++) {
    arrButton[i].onclick = function() {
        alert(i+1);
    }
}

// const
// const domain = "https://api.cybersoft.vn";
// domain = "abc";
const setting = {
    domain : "https://api.cybersoft.vn",
    ip  : "192.168.1.1"
}
setting.domain = "sdjhfkasj.vn";

// hoisting
console.log(title);     // => báo undifined
var title = "cybersoft";

// console.log(title1);
// let title1 = "abc";     // => báo lỗi



//----------------- 2. Arrow function -----------------//
/*
    + Đối với hàm có 1 tham số arrowFunction cho phép rút gọn ()
    + Đối với hàm có 1 lệnh return, arrowFunction cho phép rút gọn {} và chữ return 
    + ArrowFunction không thể tạo prototype như function đc
*/
// es5
function showMessageES5(mess) {
    return mess;
}
// var showMessage = function(mess) {
//     return mess;
// }

// es6
let showMessage = (mess) => {
    return "Hello" + mess;
}
// => let showMessage = mess => "Hello" + mess;
console.log(showMessage("Nam"));

// Dom đến button1
let domId = id => document.getElementById(id);
domId("btn1").style.background = "red";


//----------------- context (this) ngữ cảnh con trỏ this -----------------//
/*
    + Mặc định this sẽ trỏ về window
    + this sử dụng trong đối tượng thì this sẽ là đối tượng đó
    + this sử dụng trong prototype (lớp đối tượng) thì this sẽ là prototype đó
*/
console.log("this", this); // => window
console.log(document);
console.log(window.innerHeight);

var email = "abc@gmail.com";
this.email = "abc@gmail.com";
window.email = "abc@gmail.com";
console.log("email", email);

let hocVien = {
    ma : 1,
    hoTen : "Nguyen Van A",
    hienThiThongTin : function() {

        // function hienThi() {
        //     console.log("Mã:", this.ma);
        //     console.log("Ho Ten:", this.hoTen);
        // }
        let hienThi = () => {
            console.log("Mã:", this.ma);
            console.log("Ho Ten:", this.hoTen);
        }
        hienThi();
    }
}
window.hoTen = "abc";
hocVien.hienThiThongTin();


//----------------- 3. Rest Param -----------------//
// function tinhTong(a,b) {
//     console.log(a + b);
// }
// function tinhTong(a, b, c) {
//     console.log(a+b+c);
// }
function tinhTong(...restParam) {
    switch(restParam.length) {
        case 2: 
            console.log(restParam[0] + restParam[1]);
            break;
        case 3:
            console.log(restParam[0] + restParam[1] + restParam[2]);
            break;
        default:
            console.log("Tham số đầu vào không hợp lệ");
    }
}
tinhTong(1,2);
tinhTong(1,2,3);
tinhTong(1,2,3,4,5);


//----------------- 4. Spead Operator -----------------//
// let number1 = 5;
// let number2 = number1;
// number2 = 10;
// console.log(number1);
// console.log(number2);
let hocVien1 = {ma:5, hoten:"Nguyen Van A", hoten:"AAA"};
// let hocVien2 = hocVien1;
// let hocVien2 = {ma:4,hoten:"abc"};
let hocVien2 = {...hocVien1, lop:"FE67", hoten:"Nguyen Van B"};
hocVien2.ma = 10;
// hocVien2.hoten = "Nguyen Van B";
console.log(hocVien1);
console.log(hocVien2);

let arr1 = [1,2,3,4];
let arr2 = [...arr1,1,2,3,4,5,6];
arr2.push(5);
console.log(arr1);
console.log(arr2);


//----------------- 5. Default Parameter -----------------//
/*
    Khi gọi hàm truyền tham số thì hàm sẽ sử dụng tham số mình truyền , khi không truyền tham số thì hàm sử dụng tham số mặc định
*/

function hienThiThongTin(ten = "Truc", namSinh = 2000, tuoi = 2020 - namSinh) {
    console.log("ten", ten);
    console.log("namSinh", namSinh);
    console.log("tuoi", tuoi);
}
hienThiThongTin("Khai", 2001);
hienThiThongTin("Khai", 2001, 15);


//----------------- 6. Destructuring -----------------//
let hocVienCyber = {
    ma: "01",
    hoTenHV: "Tran Thi B",
    lop: "Frontend67",
    hienThiThongTinHV : function() {
        console.log("Ten",hocVienCyber.hoTenHV);
    }
}

// ES5 tạo biến dựa trên thuộc tính
// let hoTenHV = hocVienCyber.hoTenHV;

// ES6 
// tên biến phải trùng tên thuộc tính
let {hoTenHV,hienThiThongTinHV,...restParam} = hocVienCyber;
console.log(restParam);
console.log(hoTenHV);


//----------------- 7. String Template -----------------//


//----------------- 8. Object Literals -----------------//
/*
    + Cho phép truyền giá trị động vào làm tên thuộc tính
*/
let maSP = "mã sản phẩm";
let tenSP = "Iphone XS Max";

let sanPham = {
    [maSP]: "IP1",
    tenSP,
    gia: 1000
}
console.log("san pham:",sanPham["mã sản phẩm"]);


//----------------- 9. for in - for of -----------------//
/*
    for in: thường dùng để duyệt object (các thuộc tính và giá trị của object)
    for of: thường dùng để duyệt các phần tử (object) trong mảng
*/
let arrProduct = [
    {id:1, name:"Iphone X", price:3000},
    {id:2, name:"Sony XZ", price:2000},
    {id:3, name:"Galaxy Note 10 plus", price:1000},
]
for(let index in arrProduct) {
    // Mỗi lần duyệt lấy ra 1 sản phẩm
    let product = arrProduct[index];
    console.log(`Index [${index}] = `,product);
}

for(let product of arrProduct) {
    console.log("product",product);
}

for(let tenThuocTinh in sanPham) {
    console.log(tenThuocTinh, sanPham[tenThuocTinh])
}