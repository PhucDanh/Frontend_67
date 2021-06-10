/**
 * QUẢN LÝ SINH VIÊN
 * ** Phân rã chức năng
 *      1. Thêm sinh viên mới vào danh sách
 *      2. Xem danh sách toàn bộ sinh viên
 *      3. Cập nhật thông tin sinh viên
 *      4. Xóa sinh viên ra khỏi danh sách
 *      5. Tìm kiếm sinh viên bằng tên hoặc mã
 *      6. Validation input
 * 
 * ** Lên giao diện
 * 
 * ** Phân rã đối tượng: Student(id, name, type, math, physics, sciences, training, calcAverage())
 * 
 * ** Bắt đầu từng chức năng
 * 
 */

var studentArr = [];

// // function 1: Thêm sinh viên
// function addStudent() {}
var addStudent = function() {
    if(validateForm() === false) {
        return;
    }

    // DOM input, lấy value
    // var id = document.getElementById("txtMaSV").value;
    // var name = document.getElementById("txtTenSV").value;
    // var type = document.getElementById("loaiSV").value;
    // var math = document.getElementById("txtDiemToan").value;
    // var physic = document.getElementById("txtDiemLy").value;
    // var science = document.getElementById("txtDiemHoa").value;
    // var training = document.getElementById("txtDiemRenLuyen").value;
    var id = document.querySelector("#txtMaSV").value;
    var name = document.querySelector("#txtTenSV").value;
    var type = document.querySelector("#loaiSV").value;
    var math = +document.querySelector("#txtDiemToan").value;
    var physic = +document.querySelector("#txtDiemLy").value;
    var science = +document.querySelector("#txtDiemHoa").value;
    var training = +document.querySelector("#txtDiemRenLuyen").value;

    // kiểm tra id có tồn tại chưa
    for(var i = 0; i < studentArr.length; i++) {
        if(studentArr[i].id === id) {
            console.log("Id existed");
            return;
        }
    }

    // tạo đối tượng sinh viên
    var sinhVien = new Student(id, name, type, math, physic, science, training);

    // push đối tượng sinh viên vào mảng
    studentArr.push(sinhVien);

    saveData();

    createTable();

    // console.log(studentArr);
}

// function 2: Hiện danh sách toàn bộ sinh viên
var createTable = function(data) {
    var content = "";

    if(data === undefined) {
        data = studentArr;
    }

    for(var i = 0; i < data.length; i++) {
        content += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].type}</td>
            <td>9.8</td>
            <td>${data[i].training}</td>
            <td>
                <button onclick="deleteStudent('${data[i].id}')" class="btn btn-danger">Xoa</button>
                <button onclick="getStudentToUpdate('${data[i].id}')" class="btn btn-infor">Sua</button>
            </td>
            </tr>
            `;
            // <td>${studentArr[i].calcAverage()}</td>
    }
    // console.log(content);
    document.querySelector("#tbodySinhVien").innerHTML = content;
}

var saveData = function() {
    localStorage.setItem("students", JSON.stringify(studentArr));
}

var fetchData = function() {
    // promise: pending, fulfill, reject
    var promise = axios({
        url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
        method: "GET",
    });
    promise.then(function(res) {
        console.log(res);
    });
    promise.catch(function(err) {
        console.log(err);
    });
    // axios({
    //     url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    //     method: "GET",
    // })
    //     .then(function(res) {
    //         console.log(res);
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });
}
// var fetchData = function() {
//     var studentJSON = localStorage.getItem("students");
//     if(studentJSON !== null) {
//         studentArr = JSON.parse(studentJSON);
//         createTable();
//     }
// }
fetchData();

// function 3: Xóa sinh viên ra khỏi danh sách
var deleteStudent = function(id) {
    var index = findById(id);
    if(index !== -1) {
        studentArr.splice(index, 1);
        saveData();
        createTable();
    }
}

// Tìm vị trí của phần tử trong mảng
var findById = function(id) {
    for(var i = 0; i < studentArr.length; i++) {
        if(studentArr[i].id === id) {
            return i;
        }
    }
    // return vị trí, return -1 nếu không tìm thấy
    return -1;
}

// function 4.1: Lấy sinh viên muốn sửa
var getStudentToUpdate = function(id) {
    var index = findById(id);

    document.querySelector("#txtMaSV").value = studentArr[index].id;
    document.querySelector("#txtTenSV").value = studentArr[index].name;
    document.querySelector("#loaiSV").value = studentArr[index].type;
    document.querySelector("#txtDiemToan").value = studentArr[index].math;
    document.querySelector("#txtDiemLy").value = studentArr[index].physic;
    document.querySelector("#txtDiemHoa").value = studentArr[index].science;
    document.querySelector("#txtDiemRenLuyen").value = studentArr[index].training;

    // document.querySelector("txtMaSV").style.backgroundColor = "red";
    // document.querySelector("txtMaSV").setAttribute("style", "background-color: green");
    // setAttribute: id, class, style, disabled, ...

    document.querySelector("#txtMaSV").setAttribute("disabled", true);
    document.querySelector("#btnAdd").setAttribute("style", "display: none");
    document.querySelector("#btnUpdate").setAttribute("style", "display: inline");
} 

// function 4.2: Lưu thông tin đã chỉnh sửa
var updateStudent = function() {
    var id = document.querySelector("#txtMaSV").value;
    var name = document.querySelector("#txtTenSV").value;
    var type = document.querySelector("#loaiSV").value;
    var math = +document.querySelector("#txtDiemToan").value;
    var physic = +document.querySelector("#txtDiemLy").value;
    var science = +document.querySelector("#txtDiemHoa").value;
    var training = +document.querySelector("#txtDiemRenLuyen").value;

    var index = findById(id);
    studentArr[index].name = name;
    studentArr[index].type = type;
    studentArr[index].math = math;
    studentArr[index].physic = physic;
    studentArr[index].science = science;
    studentArr[index].training = training;

    saveData();
    createTable();
    // clear form
    document.querySelector("#btnReset").click();

    document.querySelector("#txtMaSV").removeAttribute("disabled");
    document.querySelector("#btnAdd").setAttribute("style","display: inline");
    document.querySelector("#btnUpdate").setAttribute("style","display: none");
}

// function 5: Tìm kiếm sinh viên
var findStudent = function() {
    var result = [];
    var keyword = document.querySelector("#txtSearch").value;

    for(var i = 0; i < studentArr.length; i++) {
        if(studentArr[i].id === keyword || studentArr[i].name.toLowerCase().includes(keyword.toLowerCase()) === true) {
            result.push(studentArr[i]);
        }
    }

    createTable(result);
    // console.log(result);
}

// -------- VALIDATION INPUT: required, minlength, maxlength, pattern -------- //
var checkRequired = function(value, errorMessageId) {
    if(value.length > 0) {
        document.getElementById(errorMessageId).innerHTML = "";
        return true;
    }
    document.getElementById(errorMessageId).innerHTML = "* Trường này bắt buộc nhập";
    return false;
}

var checkLength = function(value, errorMessageId, min, max) {
    if(value.length >= min && value.length <= max) {
        document.getElementById(errorMessageId).innerHTML = "";
        return true;
    }
    document.getElementById(errorMessageId).innerHTML = `Độ dài phải từ ${min} tới ${max} kí tự`;
    return false;
}

var validateForm = function() {
    var id = document.querySelector("#txtMaSV").value;
    var name = document.querySelector("#txtTenSV").value;
    var isValid = true;

    isValid &= checkRequired(id, "studentIdError") && checkLength(id, "studentIdError", 6, 8);
    isValid &= checkRequired(name, "studentNameError") && checkLength(id, "studentNameError", 6, 8) && checkText(name, "studentNameError");

    return isValid;
}

// -------- REGULAR EXPRESSION -------- //
var checkText = function(value, errorMessageId) {
    var pattern = /^[A-Za-z\s]+$/g;
    if(pattern.test(value) == true) {
        document.getElementById(errorMessageId).innerHTML = "";
        return true;
    }
    document.getElementById(errorMessageId).innerHTML = "* Vui lòng nhập chữ";
    return false;
}



// --------------------------------------------------------- //
// // Có 2 cách khởi tạo function
// // Decleration function có hoisting
// function sum1(a, b) {
//     console.log(a+b);
// }
// sum1();

// // Expression function không có hoisting
// var sum2 = function (a,b) {
//     console.log(a+b);
// }
// sum2();


// // hoisting: cho phép dùng 1 biến trước khi khai báo
// console.log(a);
// var a = 5;
// --------------------------------------------------------- //