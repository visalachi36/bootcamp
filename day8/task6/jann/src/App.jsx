import React from "react";
import StudentList from "./StudentList";

const students = [
  { name: "Niran", major: "Computer Science", year: "Freshman", photo: "niran.jpg" },
  { name: "Visal", major: "Information Technology", year: "Sophomore", photo: "visal.jpg" },
  { name: "Kavu", major: "Electronics", year: "Junior", photo: "kavu.jpg" },
  { name: "Ponnu", major: "Mechanical Engineering", year: "Senior", photo: "ponnu.jpg" },
];

const App = () => {
  return (
    <div>
      <h1 className="title">Student List</h1>
      <StudentList students={students} />
    </div>
  );
};

export default App;
