var employee1 = /** @class */ (function () {
    function employee1(name, salary) {
        console.log('i am a constructor');
        this.name = name;
        this.salary = salary;
    }
    employee1.prototype.taxCalculator = function () {
        if (this.salary <= 300000) {
            this.tax = (this.salary / 100) * 8;
            console.log("Name:".concat(this.name, " Tax amount to pay ").concat(this.tax));
        }
        else if (this.salary > 300000 && this.salary < 500000) {
            this.tax = (this.salary / 100) * 10;
            console.log("Name:".concat(this.name, " Tax amount to pay ").concat(this.tax));
        }
        else if (this.salary > 500000 && this.salary < 800000) {
            this.tax = (this.salary / 100) * 12;
            console.log("Name:".concat(this.name, " Tax amount to pay ").concat(this.tax));
        }
        else if (this.salary > 800000 && this.salary < 1000000) {
            this.tax = (this.salary / 100) * 14;
            console.log("Name:".concat(this.name, " Tax amount to pay ").concat(this.tax));
        }
        else if (this.salary > 1000000) {
            this.tax = (this.salary / 100) * 16;
            console.log("Name:".concat(this.name, " Tax amount to pay ").concat(this.tax));
        }
    };
    employee1.prototype.agelimit = function (age) {
        this.age = age;
        if (this.age < 18 || this.age > 60) {
            this.ageres = (this.tax / 100) * 50;
            console.log("Name:".concat(this.name, " Tax amount to pay after exemptions ").concat(this.ageres));
        }
        else if (this.age > 18 && this.age < 60) {
            empobj.gender('female');
        }
    };
    employee1.prototype.gender = function (x) {
        this.x = x;
        if (this.x = 'female') {
            this.ageres = (this.tax / 100) * 10;
            console.log("Name:".concat(this.name, " Tax amount to pay after exemptions ").concat(this.ageres));
        }
        else if (this.x = 'male') {
            this.ageres = this.tax;
        }
    };
    return employee1;
}());
var empobj = new employee1('elsa', 300000);
empobj.taxCalculator();
empobj.agelimit(16);
