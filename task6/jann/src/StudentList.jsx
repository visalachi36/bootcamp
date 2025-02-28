import React from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css"; // Make sure this file exists

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
};

export default StudentList;
