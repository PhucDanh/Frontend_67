// Global scope
console.log("Hello World from outside");

// Variable
var fullName = "Ngo Phuc Danh";
var age = "24";

console.log(fullName,age);

// Kieu du lieu
// 1.number
var num = "12";
// 2.string
var email = "danh@gmail.com";
// 3.boolean
var isHandsome = false;
// 4.null vs undefined
var phone;          // => undefined
var gender = null;  // => null

// toan tu va lenh gan
var res1 = 1 + 2;
var res2 = 3 / 2; //1.5
var res3 = 4 % 3; //1

// function
function calcSum() {
    // Bien cuc bo
    var sum = 1 + 2;
    console.log(sum);
}

calcSum();

// cau dieu kien
var n = 7;
if(n > 5) {
    console.log(n, "lon hon 5");
} else {
    console.log(n, "nho hon 5");
}

function calcSalary () {
    /**
     * input: so gio lam, tien moi gio
     * 
     * process:
     *      - tao 2 bien workingHours, salaryPerHour
     *      - tinh luong: 2 truong hop duoi 40 va tren 40, he so OT 1.5
     *      - console.log(luong tinh duoc)
     * 
     * output: tien luong 
     */
    var workingHours = 40;
    var salaryPerHour = 10;
    var totalSalary;

    if(workingHours <= 40) {
        totalSalary = workingHours * salaryPerHour;
    } else {
        totalSalary = 40 * salaryPerHour + (workingHours - 40) * salaryPerHour * 1.5;
    }
    console.log (totalSalary);
}
calcSalary();

function main() {
    /**
     * input: name, toan, ly, hoa
     * 
     * process:
     * 
     * output: diem trung binh, xep loai
     */
}

function calcAverage() {
    //input: toan, ly, hoa
}

function classify() {

}