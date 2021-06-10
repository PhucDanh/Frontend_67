/**
 *  QUẢN LÝ SINH VIÊN
 * ** Phân rã chức năng
 *   1. Thêm sinh viên mới vào danh sách
 *   2. Xem ds toàn bộ sinh viên
 *   3. Cập nhật thông tin sinh viên
 *   4. Xoá sinh viên ra khỏi ds
 *   5. Tìm kiếm sinh viên bằng tên hoăc mã
 *   6. Validation input
 *
 * *** Lên Giao diên
 *
 * *** Phân tích lớp đối tượng : Student (id, name, type, math, physics, chemistry, training, calcAverage())
 *
 * *** Bắt đầu từng chức năng
 *
 */

var studentArr = [];

// function 1: Thêm sinh viên
var addStudent = function () {
  // dom input , lấy value
  var id = document.querySelector("#txtMaSV").value;
  var fullName = document.querySelector("#txtTenSV").value;
  var type = document.querySelector("#loaiSV").value;
  var math = +document.querySelector("#txtDiemToan").value;
  var physics = +document.querySelector("#txtDiemLy").value;
  var chemistry = +document.querySelector("#txtDiemHoa").value;
  var training = +document.querySelector("#txtDiemRenLuyen").value;

  checkRequired(id, "studentIdError") && checkLength(id, "studentIdError", 6, 8);

  checkRequired(fullName, "nameError");

  // kiểm tra id có tồn tại chưa, nếu có báo lỗi => return
  // duyệt studentArr, lấy từng đối tượng sinh viên có id === id

  // for (var i = 0; i < studentArr.length; i++) {
  //   if (studentArr[i].id === id) {
  //     console.log("Mã sinh viên đã tồn tại");
  //     return;
  //   }
  // }

  // // tạo đối tượng sinh viên
  // var newStudent = new Student(
  //   id,
  //   fullName,
  //   type,
  //   math,
  //   physics,
  //   chemistry,
  //   training
  // );

  // // push đối tượng sinh viên vào studentArr
  // studentArr.push(newStudent);

  // createTable();

  // saveData();

  // console.log(studentArr);
};

// function 2 : hiện ds toàn bộ sinh viên
var createTable = function (data) {
  if (data === undefined) {
    data = studentArr;
  }
  var content = "";

  for (var i = 0; i < data.length; i++) {
    content += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].type}</td>
            <td>9.8</td>
            <td>${data[i].training}</td>
            <td>
                <button onclick="deleteStudent('${data[i].id}')" class="btn btn-danger">Xoá</button>
                <button onclick="getStudentToUpdate('${data[i].id}')" class="btn btn-info">Sửa</button>
            </td>
        </tr>
    `;
  }

  console.log(content);

  document.querySelector("#tbodySinhVien").innerHTML = content;
};

//function 3: Xoá sinh viên ra khỏi ds
var deleteStudent = function (id) {
  // tìm vị trí theo id
  var index = findById(id);

  if (index !== -1) {
    studentArr.splice(index, 1);
    createTable();

    saveData();
  }
};

// function 4.1: Lấy sinh viên muon sửa
var getStudentToUpdate = function (id) {
  var index = findById(id);
  // => sinh viên cần sửa:  studentArr[index]

  document.querySelector("#txtMaSV").value = studentArr[index].id;
  document.querySelector("#txtTenSV").value = studentArr[index].name;
  document.querySelector("#loaiSV").value = studentArr[index].type;
  document.querySelector("#txtDiemToan").value = studentArr[index].math;
  document.querySelector("#txtDiemLy").value = studentArr[index].physics;
  document.querySelector("#txtDiemHoa").value = studentArr[index].chemistry;
  document.querySelector("#txtDiemRenLuyen").value = studentArr[index].training;

  // document.querySelector("#txtMaSV").style.backgroundColor = "red";
  // document
  //   .querySelector("#txtMaSV")
  //   .setAttribute("style", "background-color: green");
  // setAttribute: id, class, style, disabled...

  document.querySelector("#txtMaSV").setAttribute("disabled", true);

  document.querySelector("#btnAdd").style.display = "none";
  document.querySelector("#btnUpdate").style.display = "inline";
};

// function 4.2: lưu thông tin đã chỉnh sửa
var updateStudent = function () {
  var id = document.querySelector("#txtMaSV").value;
  var fullName = document.querySelector("#txtTenSV").value;
  var type = document.querySelector("#loaiSV").value;
  var math = +document.querySelector("#txtDiemToan").value;
  var physics = +document.querySelector("#txtDiemLy").value;
  var chemistry = +document.querySelector("#txtDiemHoa").value;
  var training = +document.querySelector("#txtDiemRenLuyen").value;

  var index = findById(id);
  // sinh viên đang cần chỉnh sửa: studenArr[index]
  studentArr[index].name = fullName;
  studentArr[index].type = type;
  studentArr[index].math = math;
  studentArr[index].physics = physics;
  studentArr[index].chemistry = chemistry;
  studentArr[index].training = training;

  createTable();

  saveData();

  // clear form
  document.querySelector("#btnReset").click();

  // ẩn button cập nhật, hiện button add
  document.querySelector("#btnAdd").style.display = "inline";
  document.querySelector("#btnUpdate").style.display = "none";

  // gỡ disabled cho ô mã sv
  document.querySelector("#txtMaSV").removeAttribute("disabled");
};

// function 5: tìm kiếm sinh viên
var findStudents = function () {
  var result = [];
  var keyword = document.querySelector("#txtSearch").value.toLowerCase();

  for (var i = 0; i < studentArr.length; i++) {
    var studentName = studentArr[i].name.toLowerCase();
    if (
      studentArr[i].id === keyword ||
      studentName.includes(keyword) === true
    ) {
      result.push(studentArr[i]);
    }
  }

  createTable(result);
};

var findById = function (id) {
  for (var i = 0; i < studentArr.length; i++) {
    if (studentArr[i].id === id) {
      return i;
    }
  }

  return -1;
  //return vị trí, return -1
};

var saveData = function () {
  console.log(JSON.stringify(studentArr));
  localStorage.setItem("students", JSON.stringify(studentArr));
};

var fetchData = function () {
  var studentJSON = localStorage.getItem("students");
  if (studentJSON !== null) {
    studentArr = JSON.parse(studentJSON);

    createTable();
  }
};

fetchData();

// ------ VIDATIONS INPUT : required, minlength, maxlength, pattern ------

var checkRequired = function (value, errorMessageId) {
  if (value.length > 0) {
    document.getElementById(errorMessageId).innerHTML = "";
    return true;
  }
  document.getElementById(errorMessageId).innerHTML =
    "* Trường này bắt buộc nhập";
  return false;
};

var checkLength = function (value, errorMessageId, min, max) {
  if (value.length >= min && value.length <= max) {
    document.getElementById(errorMessageId).innerHTML = "";
    return true;
  }
  document.getElementById(
    errorMessageId
  ).innerHTML = `* Độ dài phải từ ${min} tới ${max} kí tự`;
  return false;
};

// có 2 cách để khởi tạo function
// declaration function : có hoisting
// sum1();
// function sum1(a, b) {
//   console.log(a + b);
// }

// expression function : không có hoisting

// var sum2 = function (a, b) {
//   console.log(a + b);
// };
// sum2();

// hoisting: cho phép dùng 1 biến trước khi khai báo

// console.log(a);
// var a = 5;
// console.log(a);
