import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const studentsPerPage = 5; // Number of students per page

  useEffect(() => {
    fetchStudents(currentPage);
  }, [currentPage]);

  const fetchStudents = (page) => {
    axios
      .get(`http://localhost:5000/api/students?page=${page}&limit=${studentsPerPage}`)
      .then(response => {
        setStudents(response.data.students);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.error("Error fetching students:", error));
  };

  return (
    <div className="container">
      <h2 className="text-center">Student List</h2>
      
      <div className="row justify-content-center">
        {students.map(student => (
          <div key={student.studentId} className="col-md-4 col-sm-6">
            <StudentCard student={student} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentList;
