$(document).ready(readyNow);
console.log('in client JS');

function readyNow() {
    console.log('in readyNow');
    $('#submitBtn').on('click', addEmployee);
    $('#employeeList').on('click', '.delete', removeEmployee);
}

let employeeList = [];

function addEmployee(event) {
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
//// display all the employees to the DOM
function showEmployee() {
    let totalMonthlyCost = 0; // Total monthly cost of employees
    let totalAnnualSalary = 0; // Total salary of employees
    let el = $('#employeeList');
    el.empty();
    for (let i = 0; i < employeeList.length; i++) {
        el.append(`
        <tr>
            <th>${employeeList[i].firstName}</th><th>${employeeList[i].lastName}</th><th>${employeeList[i].id}</th>
            <th>${employeeList[i].title}</th><th>$${employeeList[i].annualSalary}</th>
            <th><button class="btn btn-danger delete">Delete</button></th>
        </tr>`);
        totalAnnualSalary += Number(employeeList[i].annualSalary);
    }
    totalMonthlyCost = calcMonthlyCost(totalAnnualSalary, totalMonthlyCost);
    $('#totalSalary').html('$' + totalMonthlyCost.toFixed(2));
}

//deleting employee from the DOM
function removeEmployee() {
    let employeeInfo = $(this).parent().siblings().text();
    let employeeInfoCheck = '';
    for (let i = 0; i < employeeList.length; i++) {
        employeeInfoCheck = employeeList[i].firstName +
        employeeList[i].lastName + employeeList[i].id +employeeList[i].title + employeeList[i].annualSalary;
        employeeInfo = employeeInfo.replace('$', '');
        if (employeeInfoCheck === employeeInfo) {
            employeeList.splice(i, 1);
            break;
        }
    }
    showEmployee();
}

function calcMonthlyCost(annualSalaryTotal, monthlyCostTotal) {
    monthlyCostTotal = annualSalaryTotal / 12;
    if (monthlyCostTotal > 20000) {
        $('#totalSalary').parent().addClass('red');
    }
    return monthlyCostTotal;
}

