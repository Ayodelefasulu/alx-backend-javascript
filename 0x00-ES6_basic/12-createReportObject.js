// 12-createReportObject.js

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Use the employeesList directly
    getNumberOfDepartments() {
      // Return the number of departments in the employeesList object
      return Object.keys(this.allEmployees).length;
    }
  };
}

