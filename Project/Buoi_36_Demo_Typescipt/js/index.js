"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Demo Typescript");
console.log("Hello world");
var fullName = "Ngo Phuc Danh";
var showName = function () {
    console.log(fullName);
};
showName();
var student = { name: "Danh", email: "npdanh@gmail.com" };
var studentName = student.name, email = student.email;
console.log(studentName);
// ---------------------------------- TYPES ----------------------------------//
var isLoggedIn = true;
var content = "hello babe";
var num = 12345;
var emails = ["danh@gmail.com", "npdanh@email.com"];
var course = { name: "anguler", rating: 4 };
var courses = [
    { name: "java", rating: 5 },
    { name: "bootstrap", rating: 4 }
];
var studentInfo = ["tuple", 4];
var colors;
(function (colors) {
    // key = value
    colors["green"] = "#00ff00";
    colors["blue"] = "#0000ff";
})(colors || (colors = {}));
;
var color = colors.blue;
console.log(colors.green, colors.blue);
var response = 12;
var sex = null;
var description = undefined;
// Advanced type
// union type
var res = 12;
var res2 = "DanhNgo";
// Function type
function showMessage(message) {
    console.log(message);
}
function sum(a, b) {
    return a + b;
}
console.log(sum(23, 1.5));
var Student = /** @class */ (function () {
    function Student(name, age, phone) {
        this.name = name;
        this.age = age;
        this._phone = phone;
    }
    Object.defineProperty(Student.prototype, "phone", {
        // public getPhone() {
        //     return this._phone;
        //  
        // public setPhone(phone: string) {
        //     this._phone = phone;
        // }
        get: function () {
            return this._phone;
        },
        set: function (phone) {
            this._phone = phone;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(name, age, phone) {
        return _super.call(this, name, age, phone) || this;
    }
    return Student2;
}(Student));
var Student3 = /** @class */ (function () {
    function Student3(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    Student3.prototype.getInfo = function () {
        console.log("implement");
        return "interface";
    };
    return Student3;
}());
var newStudent = new Student("danh", 24, "0963705653");
console.log("lần 1", newStudent.name, newStudent.phone);
newStudent.phone = "01233458829";
console.log("lần 2", newStudent.name, newStudent.phone);
