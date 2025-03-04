import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch student data from backend
    const fetchStudents = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5000/students");
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
        setLoading(false);
    };

    // Fetch students on page load
    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container">
            <h1 className="title">STUDENT LIST</h1>
            <button className="refresh-btn" onClick={fetchStudents} disabled={loading}>
                {loading ? "Refreshing..." : "Refresh"}
            </button>

            <div className="student-container">
                {students.map((student) => (
                    <div key={student.id} className="student-card">
                        <h3>{student.name}</h3>
                        <p><strong>Major:</strong> {student.major}</p>
                        <p><strong>Year:</strong> {student.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
