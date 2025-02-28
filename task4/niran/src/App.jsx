// src/App.jsx
import React from 'react';
import StudentCard from './StudentCard';

const students = [
  {
    name: "visal",
    major: "Computer Science",
    year: "3rd Year",
    photo: "visal.jpeg"
  },
  {
    name: "Niranjan",
    major: "Mechanical Engineering",
    year: "2nd Year",
    photo: "niran.jpg"
  },
  {
    name: "Kaviya",
    major: "Electrical Engineering",
    year: "4th Year",
    photo: "kavu.jpeg"
  },
  {
    name: "Dinesh",
    major: "Civil Engineering",
    year: "1st Year",
    photo: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Varsha",
    major: "Information Technology",
    year: "3rd Year",
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

const App = () => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard 
          key={index}
          name={student.name}
          major={student.major}
          year={student.year}
          photo={student.photo}
        />
      ))}
    </div>
  );
};

export default App;
