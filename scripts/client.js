$(document).ready(onReady);

function onReady() {
    $('#submitEmployee').on('click', addEmployee);
    $('#employeeList').on('click', '.delete', removeEmployee);
}


