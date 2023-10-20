function updateEmployeeWithKeyAndValue(employee, key, value) {
        const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    
    return updatedEmployee;
  }
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
  console.log(updatedEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    
    employee[key] = value

    return employee
}
function deleteFromEmployeeByKey(employee, key) { 
    const newEmployee = { ...employee };
   delete newEmployee[key];
    return newEmployee;
}
const employee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
};
const newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee);
console.log(employee);
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
  
    return employee;
}



destructivelyDeleteFromEmployeeByKey(employee, 'name');


console.log(employee);
