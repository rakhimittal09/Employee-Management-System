const employeeForm = document.getElementById("employeeForm");
const employeeTableBody = document.getElementById("employeeTableBody");
const employeeName = document.getElementById("employeeName");
const employeeEmail = document.getElementById("employeeEmail");
const employeeDepartment = document.getElementById("employeeDepartment");
const employeePosition = document.getElementById("employeePosition");
const employeeSalary = document.getElementById("employeeSalary");
let employees = [];
let employeeId = 1;
employeeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const employee = {
        id: "EMP" + String(employeeId).padStart(3, "0"),
        name: employeeName.value,
        email: employeeEmail.value,
        department: employeeDepartment.value,
        position: employeePosition.value,
        salary: employeeSalary.value
    };
    employees.push(employee);
    employeeId++;
    displayEmployees();
    employeeForm.reset();

});
function displayEmployees() {
    employeeTableBody.innerHTML = "";
    employees.forEach(function (employee, index) {
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
function deleteEmployee(index) {

    employees.splice(index, 1);

    displayEmployees();

}