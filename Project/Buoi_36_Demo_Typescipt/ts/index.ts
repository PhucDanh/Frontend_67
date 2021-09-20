console.log("Demo Typescript");
console.log("Hello world");

var fullName = "Ngo Phuc Danh";

const showName = () => {
    console.log(fullName);
}
showName();

const student = {name: "Danh", email:"npdanh@gmail.com"}

const { name: studentName, email } = student;

console.log(studentName);

// ---------------------------------- TYPES ----------------------------------//
const isLoggedIn: boolean = true;

const content: string = "hello babe";

const num: number = 12345;

const emails: string[] = [ "danh@gmail.com", "npdanh@email.com" ];

const course: { name: string, rating: number} = { name:"anguler", rating:4};

const courses: { name: string, rating: number}[] = [
    { name: "java", rating: 5},
    { name: "bootstrap", rating: 4}
];

const studentInfo: [string, number] = ["tuple", 4];

enum colors {
    // key = value
    green = "#00ff00",
    blue = "#0000ff"
};

const color: colors = colors.blue;

console.log(colors.green, colors.blue);

const response: any = 12;

const sex: null = null;

const description: undefined = undefined;

// Advanced type
// union type
const res: number | string | undefined =  12;
// aliases type
type resType = number | string | undefined;
const res2 = "DanhNgo";

// Function type
function showMessage(message: string): void {
    console.log(message);
}

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(23,1.5));

// ---------------------------------- OOP ----------------------------------//
interface IStudent {
    name: string;
    phone: string;
    getInfo(): string;
}

class Student {
    public name: string;
    protected age: number;
    private _phone: string;
    
    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this._phone = phone;
    }
    // public getPhone() {
    //     return this._phone;
    //  
    // public setPhone(phone: string) {
    //     this._phone = phone;
    // }
    get phone() {
        return this._phone;
    }
    set phone(phone: string) {
        this._phone = phone;
    }
}

class Student2 extends Student {
    constructor(name: string, age: number, phone: string) {
        super(name, age, phone);
    }
}

class Student3 implements IStudent {
    public name: string;
    public phone: string;
    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
    } 
    getInfo() {
        console.log("implement");
        return "interface";
    }
}

const newStudent = new Student("danh", 24, "0963705653");
console.log("lần 1", newStudent.name, newStudent.phone);
newStudent.phone = "01233458829";
console.log("lần 2", newStudent.name, newStudent.phone);