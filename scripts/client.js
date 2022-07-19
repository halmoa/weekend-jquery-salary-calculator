$(document).ready(onReady);

function onReady() {
    $('#submitEmployee').on('click', addEmployee);
    $('#employeeList').on('click', '.delete', removeEmployee);
}

let employeeList = [];

function addEmployee(event) {
    // this prevents the form from refreshing the page on submit
    event.preventDefault();
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        id: $('#idIn').val(),
        lastName: $('#lastNameIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    }
    //adding the employees to the DOM with isolated variable 
    employeeList.push(newEmployee);
    $('.employeeInput').val('');
    showEmployee();
}

