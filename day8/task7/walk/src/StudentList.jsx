import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.major} ${student.year}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))
        ) : (
          <p className="no-results">No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
