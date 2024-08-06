// 11-createEmployeesObject.js

export default function createEmployeesObject(departmentName, employees) {
  // Use computed property names to create the desired object structure
  return {
    [departmentName]: employees
  };
}

