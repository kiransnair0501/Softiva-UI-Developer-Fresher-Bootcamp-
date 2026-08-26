import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { employees } from "../data/employees";

function EmployeeGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <p className="no-results">
          No employees found.
        </p>
      )}
    </div>
  );
}

export default EmployeeGrid;