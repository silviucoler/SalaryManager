// A program to manage the salaries of three different types of employees.

// create an employee class to hold details about each employee

class Employee {
  constructor(name, type, salesTarget, hoursWorked) {
    this.name = name;
    this.type = type;
    this.salesTarget = salesTarget;
    this.hoursWorked = hoursWorked;
  }

  // method to calculate and return the employee's payout
  getPayout() {
    let payout = 0;
    // salaried employees are paid a flat salary every month.
    if (this.type === "salaried") {
      let salary = 5000;
      // if sales are excceeded, increase salary by 10%
      if (this.salesTarget > 5) {
        salary += salary * 0.1;
      }
      payout += salary;
      // hourly employees are paid a flat rate per hour
    } else if (this.type === "hourly") {
      let hourlyRate = 25;
      if (this.salesTarget > 0) {
        hourlyRate += hourlyRate * 0.5; // paid an extra 50% if sales are excceed
      }
      // employees payout is hourly rate multiplied by hours worked.
      payout += hourlyRate * this.hoursWorked;
    } else if (this.type === "hybrid") {
      let salary = 5000;
      let hourlyRate = 50;
      // if target is exceeded, increase hourly rate by 20%
      if (this.salesTarget > 0) {
        hourlyRate += hourlyRate * 0.2;
      }
      // calculate the payout by adding their salary to the hourly rate multiplied by the number of additional hours worked (if any)
      payout += salary + hourlyRate * (this.hoursWorked - 40);
    }
    return payout;
  }
}

// create instances for each kind of employee
const salariedEmployee1 = new Employee("John", "salaried", 5, 0);
const salariedEmployee2 = new Employee("Alex", "salaried", 10, 0);
const hourlyEmployee1 = new Employee("Chris", "hourly", 0, 40);
const hourlyEmployee2 = new Employee("Sarah", "hourly", 5, 40);
const hybridEmployee1 = new Employee("Michael", "hybrid", 0, 40);
const hybridEmployee2 = new Employee("Adam", "hybrid", 10, 60);

// array to hold all the employees details
const employees = [
  salariedEmployee1,
  salariedEmployee2,
  hourlyEmployee1,
  hourlyEmployee2,
  hybridEmployee1,
  hybridEmployee2,
];

// loop through the employees and calculate their payments. Display employees name, type and payout in the console.
employees.forEach((employee) => {
  let payout = employee.getPayout();
  console.log(`${employee.name} (${employee.type}): £${payout}`);
});
