var employees = [];

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function (){
        console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status);
        }

};

var bob = new Employee("Bob", "Boss", "100k",);
var joe = new Employee("Joe", "Assistant", "30k", "Contract");
var matt = new Employee("Matt", "Sales", "80k");

bob.printEmployeeForm();
joe.printEmployeeForm();
matt.printEmployeeForm();

employees.push(bob, joe, matt);

console.log(employees);
