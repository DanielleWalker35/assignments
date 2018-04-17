## Employee Records

You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name
Job title
Salary
Status
First, you will create an array named employees

Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

You will then:

Instantiate three employees
Override the status attribute of one of them to either "Part Time" or "Contract"
Call the printEmployeeForm method for each employee
Put the generated employees into the employees array using whichever method you prefer.
Here's a refresher for the constructor syntax:

function Car (year, make, model) {  
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myTacoma = new Car(2015, "Toyota", "Tacoma");