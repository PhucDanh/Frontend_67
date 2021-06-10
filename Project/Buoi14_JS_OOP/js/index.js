// Object
var student1 = {
    // key: value
    name: "hieu",
    age: 18,
    email: "hieu@covergo.com",

    // method
    calcAverage : function() {
        return 9;
    },

    // calcAverage() {
    //     return 1;
    // }
};

var student2 = {
    // key: value
    name: "dung",
    age: 19,
    email: "dung@covergo.com",

    // method
    calcAverage() {
        return 9;
    }
};

console.log(student1.name, student1.age, student1.calcAverage());
console.log(student2.name, student2.age, student2.calcAverage());


// -------------------------------------------------------- //
// Tạo 1 lớp đối tượng chó
function Dog(name, age, height, weight, breed, hasBirthCertificate, a, b) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.breed = breed;
    this.hasBirthCertificate = hasBirthCertificate;
    this.bark = function() {
        return this.name + " " + this.name;
    }
    this.a = a;
    this.b = b;
    this.bark1 = function(a, b) {
        return a + b;
        // return "a" + "b";
    }
}

var dog1 = new Dog("Alice", 20, 10, 20, "corgi", true, "a", "b");
var dog2 = new Dog("Lisa", 40, 20, 10, "alaska", true);
console.log(dog1, dog1.bark(), dog1.bark1());

// var dog1 = {
//     name: "Alice",
//     age: 20,
//     height: 10,
//     weight: 20,
//     breed: "corgi",
//     hasBirthCertificate: true,

//     bark() {
//         // return "Gau Gau";
//         return this.name + " " + this.name;
//     }
// };

// var dog2 = {
//     name: "Lisa",
//     age: 40,
//     height: 20,
//     weight: 10,
//     breed: "alaska",
//     hasBirthCertificate: true,

//     bark() {
//         return "Ang Ang";
//     }
// };

var dogCenter = {
    name: "cyberDog",
    address: "89 Hung Vuong",
    ceo: {
        name: "Hieu",
        age: 25,
    },
    dogs: [dog1, dog2],
}

// 1. In ra tên Trung tâm
console.log(dogCenter.name);

// 2. In ra tên giám đốc Trung tâm
console.log(dogCenter.ceo.name);

// 3. In ra tên của tất cả chó có trong trung tâm
console.log(dogCenter.dogs[0].name, dogCenter.dogs[1].name);

// Thêm thuộc tính cho object
dogCenter.phone = "0963705653";
console.log(dogCenter);

// Cập nhật thuộc tính cho object
dogCenter.address = "82 Su Van Hanh";
console.log(dogCenter.address);

// Xóa thuộc tính
delete dogCenter.address;
console.log(dogCenter);

console.log(dog1.name, dog1.age, dog1.hasBirthCertificate, dog1.bark());
