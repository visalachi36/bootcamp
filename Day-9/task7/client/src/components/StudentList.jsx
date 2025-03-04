import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-4">Student List</h2>
      <div className="row justify-content-center">
        {students.map(student => (
          <div key={student.studentId} className="col-md-4 col-sm-6">
            <StudentCard student={student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
