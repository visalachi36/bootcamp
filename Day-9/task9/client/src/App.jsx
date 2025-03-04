import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <h1>Student Database</h1>
          <StudentList />
        </div>
      </div>
    </div>
  );
}

export default App;
