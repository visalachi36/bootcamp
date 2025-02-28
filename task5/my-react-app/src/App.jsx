import React from "react";
import StudentList from "./components/StudentList";
import "./styles.css";

const studentsData = [
  { name: "vijay", major: "Computer Science", year: "Sophomore" },
  { name: "aijth", major: "Mechanical Engineering", year: "Senior" },
  { name: "suriya", major: "Business Administration", year: "Junior" },
];

function App() {
  return (
    <div className="app">
      <h1>Student Directory</h1>
      <StudentList students={studentsData} />
    </div>
  );
}

export default App;
