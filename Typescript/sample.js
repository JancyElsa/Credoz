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
console.log('-------variable Annotations------');
var a = 20;
var b = 40;
var c = a + b;
console.log(c);
console.log('-------function Annotations------');
function add(a, b) {
    return a + b;
}
var res = add(5, 10);
console.log('The addition of two numbers is ' + res);
console.log('--------object Annotations');
var stulist;
stulist = {
    id: 101,
    name: 'jancy',
    "class": 10,
    section: 'A',
    gender: 'female',
    age: 28
};
console.log(stulist);
console.log('Template string');
var fname = 'jancy';
var lname = 'mary';
var classicconcat = "My first name is" + " " + fname + " " + "and my last name is " + lname;
console.log(classicconcat);
var templatestringconcat = "My first name is ".concat(fname, " and my last name is ").concat(lname);
console.log("template string-".concat(templatestringconcat));
console.log('--------Array annotations------');
var vehicles = ['car', 'bike', 'scooter'];
// let vehicles:string[]
// vehicles=['car','bike','scooter']
var ids = [1, 2, 3, 4, 5];
console.log('-----any data type is dynamic data type-------');
var x = 'i am dynamic';
x = 100;
x = false;
x = null;
var person1 = ['jancy', 22];
//function optional parameters
function greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
console.log(greet('hello', 'elsa'));
console.log(greet('hi'));
//function default parameters
function greet1(greeting, name) {
    if (name === void 0) { name = 'jancy'; }
    return greeting + ' ' + name + '!';
}
console.log(greet1('hello', 'elsa'));
console.log(greet1('hi', 'lucky'));
console.log('-----Anonymous function--------');
var addany = function (val1, val2) {
    return val1 + val2;
};
console.log(addany(10, 20));
console.log('------Arrow Functions---------');
var any = function (num1, num2) { return num1 + num2; };
console.log(any(10, 40));
console.log('-----class-----');
var college = /** @class */ (function () {
    function college(name, HOD) {
        console.log('i am a constructor');
        this.principalname = name;
        this.noOfHOD = HOD;
    }
    college.prototype.Head = function () {
        console.log("I am ".concat(this.principalname, " principal of ABC Engineering college.In our college we have ").concat(this.noOfHOD, " departments "));
    };
    return college;
}());
//     let clg = new college();
// clg.Head()
var dept = /** @class */ (function (_super) {
    __extends(dept, _super);
    function dept(pos) {
        var _this = _super.call(this, 'lucky', 10) || this;
        _this.position = pos;
        return _this;
    }
    dept.prototype.HODnames = function (cse, ece, eee, civil, mech, auto) {
        this.cseHOD = cse;
        this.eeeHOD = ece;
        this.eceHOD = eee;
        this.civilHOD = civil;
        this.mechHOD = mech;
        this.automobHOD = auto;
        console.log("Head of Department of CSE is ".concat(this.cseHOD, ",\nHead of Department of EEE is ").concat(this.eeeHOD, ",\nHead of Department of ECE is ").concat(this.eceHOD, ",\nHead of Department of CIVIL is ").concat(this.civilHOD, ",\nHead of Department of MECH is ").concat(this.mechHOD, ",\nHead of Department of AUTOMOBILE is ").concat(this.automobHOD));
        console.log("I am ".concat(this.principalname, " principal of ABC Engineering college.In our college we have ").concat(this.noOfHOD, " departments and my position is ").concat(this.position));
    };
    return dept;
}(college));
var department = new dept('manager');
department.HODnames('jancy', 'elsa', 'juli', 'lucky', 'florance', 'fiona');
