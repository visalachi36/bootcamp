import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([
    { name: "Niran", major: "Computer Science", year: "Freshman" },
    { name: "Visal", major: "Information Technology", year: "Sophomore" },
    { name: "Kavu", major: "Electronics", year: "Junior" },
    { name: "Ponnu", major: "Mechanical Engineering", year: "Senior" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({ name: "", major: "", year: "" });

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.major} ${student.year}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Add a new student
  const addStudent = () => {
    if (newStudent.name && newStudent.major && newStudent.year) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", major: "", year: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Remove a student
  const removeStudent = (name) => {
    setStudents(students.filter((student) => student.name !== name));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="input-fields">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Major"
          value={newStudent.major}
          onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })}
        />
        <select
          value={newStudent.year}
          onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })}
        >
          <option value="">Select Year</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <button className="add-btn" onClick={addStudent}>Add Student</button>
      </div>

      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <StudentCard key={index} {...student} onRemove={removeStudent} />
          ))
        ) : (
          <p className="no-results">No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
