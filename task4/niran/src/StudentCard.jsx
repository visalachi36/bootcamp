// src/StudentCard.jsx
import React from 'react';
import './StudentCard.css';

const StudentCard = ({ name, major, year, photo }) => {
  return (
    <div className="student-card">
      <img src={photo} alt={name} className="student-photo" />
      <h2 className="student-name">{name}</h2>
      <p className="student-major">Major: {major}</p>
      <p className="student-year">Year: {year}</p>
    </div>
  );
};

export default StudentCard;
