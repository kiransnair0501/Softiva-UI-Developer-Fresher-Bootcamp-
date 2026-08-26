import { useState } from "react";
import type { Employee } from "../types/employee";
import defaultUser from "../assets/default-user.jpg";

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="employee-card">
      <img
        src={defaultUser}
        alt={`${employee.name} profile`}
        className="employee-avatar"
      />

      <h2>{employee.name}</h2>

      <p className="employee-role">
        {employee.role}
      </p>

      <span className="employee-department">
        {employee.department}
      </span>

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="employee-details">
          <p>
            <strong>Department:</strong>{" "}
            {employee.department}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {employee.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;