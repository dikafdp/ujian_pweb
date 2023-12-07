import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
    localStorage.setItem('students', JSON.stringify([...students, student]));
  };

  const updateStudent = (npm, updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.npm === npm ? { ...student, ...updatedStudent } : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setSelectedStudent(null);
  };

  const deleteStudent = (npm) => {
    const updatedStudents = students.filter((student) => student.npm !== npm);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  useEffect(() => {
    const audioElement = document.getElementById('backsound');
    if (audioElement) {
      audioElement.volume = 0.1;
    }
  }, []);

  return (
    <div className="app-container">
      <video className="video-background" autoPlay muted loop>
        <source src="/videos/wlive3.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1>Database Mahasiswa</h1>
        <Form addStudent={addStudent} updateStudent={updateStudent} selectedStudent={selectedStudent} />
        <Table students={students} deleteStudent={deleteStudent} selectStudent={selectStudent} />
      </div>

      <audio autoPlay loop id="backsound">
        <source src="/audio/moonlight.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default App;
