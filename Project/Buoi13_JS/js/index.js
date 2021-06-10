// ------------ LOOP ------------ //
function printNumber() {
    // for(var i = 0; i <= 100; i++) {
    //     if(i%2 === 0) {
    //     console.log(i, "la so chan");
    //     } else {
    //         console.log(i, "la so le");
    //     }
    // }

    var i = 0;
    while(i <= 100) {
        if(i%2 === 0) {
            console.log(i, "la so chan");
        } else {
            console.log(i, "la so le");
        }
        i++;
    }
}

function sumOfEvent(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    console.log("Tong cac so chan toi n la:", sum);
}

function countNumber() {
    var count = 0;
    for(var i = 0; i <= 1000; i++) {
        if(i % 3 === 0) {
            count++;
        }
    }
    console.log("Cac so chia het cho 3:", count);
}

function calcExponential(x, n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}

function sumExponential(x, n) {
    var sum = 0;
    for(var i = 1; i <= n; i++) {
        sum += calcExponential(x,i);
    }
    console.log("Tong cac luy thua la:",sum);
}

function calcFactorial(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("Giai thua n:", result);
}

function printSquare(n) {
    var content = "";
    for(var j = 1; j <= n; j++) {
        for(var i = 1; i <= n; i++) {
            content += "* ";
        }
        content += "\n";
    }
    console.log(content);
}

// ------------ ARRAY ------------ //
var names = ["hieu", "tai", "dung"];
var names2 = ["phu", "thuan"];
var names = new Array("hieu", "tai", "dung");

//add item to the end of array
names.push("Huyen");

//add item to begin of array
names.unshift("Tuan");

//delete the last item in array
names.pop();

//delete the first item in array
names.shift();

//delete any item in array
names.splice(1,2);

//length of array
console.log(names.length);

//concat array
var allName = names.concat(names2);

console.log(allName);
console.log(names);

// ------------ EXERCISES1 ------------ //
var numArr = [];
function addNumber() {
    var num = +document.getElementById("txtNumber").value;
    numArr.push(num);
    console.log(numArr);
}

function sumOddNumber() {
    var sum = 0;
    for(var i = 0; i < numArr.length; i++) {
        if(numArr[i] % 2 !== 0) {
            sum += numArr[i];
        }
    }
    console.log("Tong cac so le trong mang: ", sum);
}

function countNegNumber() {
    var count = 0;
    for(var i = 0; i < numArr.length; i++) {
        if(numArr[i] < 0) {
            count++;
        }
    }
    console.log("So cac so am trong mang: ", count);
}

function sumNegNumber() {
    var sum = 0;
    for(var i = 0; i < numArr.length; i++) {
        if(numArr[i] < 0) {
            sum += numArr[i];
        }
    }
    console.log("Tong cac so am trong mang: ", sum);
}

// ------------ EXERCISES2 ------------ //
var gradeList = [];

function addGrade() {
    var txtGrade = document.getElementById("txtGrade").value;
    var grades = txtGrade.split(',');
    
    for(var i = 0; i < grades.length; i++) {
        gradeList.push(+grades[i]);
    }
    console.log(gradeList);
}

function calcAverage() {
    var average = 0;
    for(var i = 0; i < gradeList.length; i++) {
        average += gradeList[i];
    }
    average = average/gradeList.length;
    console.log("Diem trung binh: ", average);
    console.log(Math.floor(average));   // lam tron xuong
    console.log(Math.ceil(average));    // lam tron len
    console.log(Math.round(average));   // lam tron standard
    console.log(average.toFixed("2"));    // lam tron thap phan
}

function searchGradeMax() {
    var first = gradeList[0];
    var second = 0;
    for(var i = 1; i < gradeList.length; i++) {
        if(first < gradeList[i]) {
            second = first;
            first = gradeList[i];
        } else if((gradeList[i] > second) && (gradeList[i] !== first)) {
            second = gradeList[i];
        }
    }
    console.log("Diem cao nhat la: ", first);
    console.log("Diem cao nhi la: ", second);
}

function searchGradeMin() {
    var min = gradeList[0];
    for(var i = 1; i < gradeList.length; i++) {
        if(min > gradeList[i]) {
            min = gradeList[i];
        }
    }
    console.log("Diem thap nhat la: ", min);
}

function checkCouple() {
    var count = 0;
    var check = false;
    for(var i = 0; i < gradeList.length; i++) {
        for(var j = 0; j < gradeList.length; j++) {
            var sum = gradeList[i] + gradeList[j];
            if(sum === 10) {
                count++;
                check = true;
            }
        }
    }
    if(check == true) {
        console.log("Ton tai cap so co tong bang 10");
        console.log("So cap thoa man dieu kien la: ", count)
    } else console.log("Khong ton tai cap so thoa man dieu kien");
}

function swapGrade(first,second) {
    var temp = 0;
    temp = gradeList[second];
    gradeList[second] = gradeList[first];
    gradeList[first] = temp;
    console.log(gradeList); 
}

function sortAscending() {
    var temp = 0;
    for(var i = 0; i < gradeList.length; i++) {
        for(var j = 0; j < gradeList.length - 1; j++) {
            if(gradeList[j] > gradeList[j+1]) {
                // temp = gradeList[j+1];
                // gradeList[j+1] = gradeList[j];
                // gradeList[j] = temp;
                swapGrade(gradeList[j],gradeList[j+1]);
            }
        }
    } 
    console.log("Chuoi sau khi sap xep theo thu tu tang dan la: ", gradeList);
}
// interchange sort
// selection sort
// insertion sort
// bubble sort
// quick sort
// merge sort
// heap sort
// radix sort


// ------------ MAIN ------------ //
function main(){
    // printNumber();
    sumOfEvent(10);
    countNumber();
    sumExponential(2,5);
    calcFactorial(4);
    printSquare(6);
}
main();

// *************************************************** //
// BIG O NOTATION : Độ phức tạp của thuật toán (operation, space) => tiêu chuẩn phỏng vấn
// O(1)
function sum(a,b) {
    return a + b;
}

// O(n)
function test(array) {
    var sum = 0;
    for(var i = 0; i <= array.length; i++) {
        sum += array(i);
    }

    for(var i = 0; i <= array.length; i++) {
        sum += array(i);
    }
}

// O(n^2)
function test(array) {
    var sum = 0;
    for(var i = 0; i <= array.length; i++) {
        for(var i = 0; i <= array.length; i++) {
            sum += array(i);
        }
    }
}

function checksum(array) {
    // Multiple point
    var i = 0; 
    var k = array.length - 1;
    var sum = 0;
    while(i < k) {
        sum = array[i] + array[k];
        if(sum === 10) {
            console.log("co");
            return true;
        } else if(sum < 10) {
            i++;
        } else if(sum > 10) {
            k--;
        }
    }
    console.log("khong co");
    return false;
}