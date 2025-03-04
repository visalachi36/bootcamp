import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => setStudents(response.data.students))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="student-list">
      {students.length > 0 ? (
        students.map(student => <StudentCard key={student.id} student={student} />)
      ) : (
        <p>Loading students...</p>
      )}
    </div>
  );
};

export default StudentList;
