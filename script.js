// Get references of all HTML elements
const employeeForm = document.getElementById("employeeForm");
const employeeTableBody = document.getElementById("employeeTableBody");
const employeeName = document.getElementById("employeeName");
const employeeEmail = document.getElementById("employeeEmail");
const employeeDepartment = document.getElementById("employeeDepartment");
const employeePosition = document.getElementById("employeePosition");
const employeeSalary = document.getElementById("employeeSalary");

// Array to store employee records
let employees = [];

// Variable to generate unique employee IDs
let employeeId = 1;

// Handle form submission
employeeForm.addEventListener("submit", function (e) {

    // Prevent page refresh
    e.preventDefault();

    // Create a new employee object
    const employee = {
        id: "EMP" + String(employeeId).padStart(3, "0"),
        name: employeeName.value,
        email: employeeEmail.value,
        department: employeeDepartment.value,
        position: employeePosition.value,
        salary: employeeSalary.value
    };

    // Add employee to the array
    employees.push(employee);

    // Increase employee ID for next record
    employeeId++;

    // Display updated employee list
    displayEmployees();

    // Clear the form fields
    employeeForm.reset();
});

// Function to display all employees in the table
function displayEmployees() {

    // Clear previous table data
    employeeTableBody.innerHTML = "";

    // Loop through each employee
    employees.forEach(function (employee, index) {

        // Add employee data as a new table row
        employeeTableBody.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td>${employee.position}</td>
                <td>₹${employee.salary}</td>
                <td>
                    <button onclick="deleteEmployee(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Function to delete an employee
function deleteEmployee(index) {

    // Remove employee from the array
    employees.splice(index, 1);

    // Refresh the employee table
    displayEmployees();
}