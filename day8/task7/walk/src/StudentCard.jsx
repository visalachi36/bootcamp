import React from "react";
import "./StudentCard.css";

const StudentCard = ({ name, major, year, photo }) => {
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
      <img src={photo} alt={name} className="student-photo" />
      <h3>{name}</h3>
      <p><b>Major:</b> {major}</p>
      <p><b>Year:</b> {year}</p>
    </div>
  );
};

export default StudentCard;
