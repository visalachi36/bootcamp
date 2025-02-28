import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.length > 0 ? (
        students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))
      ) : (
        <p>No students available.</p>
      )}
    </div>
  );
};

export default StudentList;
