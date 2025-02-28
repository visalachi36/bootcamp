import React from "react";
import "../styles.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p><strong>Major:</strong> {student.major}</p>
      <p><strong>Year:</strong> {student.year}</p>
    </div>
  );
};

export default StudentCard;
