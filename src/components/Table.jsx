import React from 'react';

const Table = ({ students, deleteStudent, selectStudent }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Nama</th>
          <th style={tableHeaderStyle}>Kelas</th>
          <th style={tableHeaderStyle}>NPM</th>
          <th style={tableHeaderStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.npm}>
            <td style={tableCellStyle}>{student.name}</td>
            <td style={tableCellStyle}>{student.class}</td>
            <td style={tableCellStyle}>{student.npm}</td>
            <td style={tableCellStyle}>
              <button onClick={() => deleteStudent(student.npm)} style={actionButtonStyle}>Delete</button>
              <button onClick={() => selectStudent(student)} style={actionButtonStyle}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle = {
  padding: '25px',
  textAlign: 'center',
  color: '#fff'
};

const tableCellStyle = {
  padding: '5px',
  color: '#fff',
  border: '1px solid #fff',
  backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
  borderRadius: '5px',
  backdropFilter: 'blur(3px)',
};

const actionButtonStyle = {
  padding: '7px 15px',
  //margin: '2px',
  width: '90px',
  height: '30px',
  //padding: '3px',
  margin: '5px',
  textAlign: 'center',
  fontSize: '12px',
  color: '#fff',
  border: '2px solid #ADD8E6',
  backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
  borderRadius: '5px',
  backdropFilter: 'blur(3px)',
};

export default Table;
