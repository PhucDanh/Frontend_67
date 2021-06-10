function calcAreaGrade(area) {
  switch (area) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function calcTypeGrade(type) {
  switch (type) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}

function calcTotalGrade(sub1, sub2, sub3, area, type) {
  var total = sub1 + sub2 + sub3 + area + type;
  return total;
}

function checkResult(totalGrade, standard) {
  if (totalGrade >= standard) {
    return true;
  }
  return false;
}

//function scope
function main() {
  //input: điểm chuẩn, điểm 3 môn, khu vực, đối tượng
  //process:
  /**
   * 1. tạo biến: sub1,sub2,sub3, standard , area, type
   * 1.1 Kiểm tra điểm 3 môn, nếu có 1 môn = 0 => rớt
   * 2. khu vưc  => điểm khu vực
   * 3. đối tương => điểm đối tương
   * 4. tính tổng điểm = sub1 + sub2 + sub3 + điểm kv + điểm đt
   * 5. kiểm tra kết quả
   * 6. in kết quả ra màn hình
   *
   */
  //output: kết quả, tổng điểm

  //DOM: Document object model
  //DOM1 : Lấy giá trị người dùng nhập từ giao diện
  var sub1 = document.getElementById("txtSub1").value; // "9"
  var sub2 = document.getElementById("txtSub2").value;
  var sub3 = document.getElementById("txtSub3").value;
  var area = document.getElementById("area").value;
  var type = document.getElementById("type").value;
  var standard = document.getElementById("txtStandard").value;

  //chuyển đổi chuỗi sang số
  //1.function parseInt(), parseFloat()

  //   sub1 = parseFloat(sub1);
  //   sub2 = parseFloat(sub2);
  //   sub3 = parseFloat(sub3);
  //   standard = parseFloat(standard);

  //2. value * 1
  //   sub1 = sub1 * 1;
  //   sub2 = sub2 * 1;
  //   sub3 = sub3 * 1;
  //   standard = standard * 1;

  //3. sử dung (+)
  sub1 = +sub1;
  sub2 = +sub2;
  sub3 = +sub3;
  standard = +standard;

  if (sub1 === 0 || sub2 === 0 || sub3 === 0) {
    console.log("Rớt");
    return;
  }
  var areaGrade = calcAreaGrade(area);

  var typeGrade = calcTypeGrade(type);

  var totalGrade = calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade);

  var result = checkResult(totalGrade, standard);

  //DOM2 : thay đổi nội dung của thẻ HTML
  if (result === true) {
    document.getElementById("result").innerHTML =
      "Đậu với số điểm là: " + totalGrade;
    //DOM3: thay đổi style của thẻ HTML
    document.getElementById("result").style.background = "green";
    document.getElementById("result").style.color = "white";
  } else {
    document.getElementById("result").innerHTML =
      "Rớt với số điểm là: " + totalGrade;

    document.getElementById("result").style.background = "red";
    document.getElementById("result").style.color = "white";
  }

  document.getElementById("img").src =
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500%2C454";
}

//global scope
// console.log("asdasddas");
// main()
