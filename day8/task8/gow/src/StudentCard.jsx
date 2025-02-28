import React from "react";
import "./StudentCard.css";

const StudentCard = ({ name, major, year, onRemove }) => {
  const getBackgroundColor = (year) => {
    switch (year) {
      case "Freshman": return "#8BC34A";  // Green
      case "Sophomore": return "#FFEB3B"; // Yellow
      case "Junior": return "#FF9800";    // Orange
      case "Senior": return "#F44336";    // Red
      default: return "#DDD";
    }
  };

  return (
    <div className="student-card" style={{ backgroundColor: getBackgroundColor(year) }}>
      <h3>{name}</h3>
      <p><b>Major:</b> {major}</p>
      <p><b>Year:</b> {year}</p>
      <button className="remove-btn" onClick={() => onRemove(name)}>Remove</button>
    </div>
  );
};

export default StudentCard;
