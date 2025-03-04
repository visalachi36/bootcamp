import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Student Data
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    setLoading(false);
  };

  // Fetch Data on Page Load + Auto-refresh every 30 seconds
  useEffect(() => {
    fetchStudents(); // Initial Fetch
    const interval = setInterval(fetchStudents, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="student-list-container">
      <h2>Student Database</h2>
      <button className="refresh-button" onClick={fetchStudents} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Data"}
      </button>
      <div className="student-list">
        {students.length > 0 ? (
          students.map(student => <StudentCard key={student.studentId} student={student} />)
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
