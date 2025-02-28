// src/StudentName.jsx
import React from 'react';
import './StudentName.css';

const StudentName = ({ name }) => {
  return (
    <div className="student-name-container">
      Student Name: {name}
    </div>
  );
};

export default StudentName;
