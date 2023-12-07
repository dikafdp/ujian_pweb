import React, { useState, useEffect } from 'react';

const Form = ({ addStudent, updateStudent, selectedStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    npm: '',
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedStudent) {
      updateStudent(selectedStudent.npm, formData);
    } else {
      addStudent(formData);
    }
    setFormData({ name: '', class: '', npm: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label style={labelStyle}>
          Nama:
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
        </label>
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>
          Kelas:
          <input type="text" name="class" value={formData.class} onChange={handleChange} style={inputStyle} />
        </label>
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>
          NPM:
          <input type="text" name="npm" value={formData.npm} onChange={handleChange} style={inputStyle} />
        </label>
      </div>
      <div>
        <button type="submit" style={submitButtonStyle}>
          {selectedStudent ? 'Update' : 'Tambahkan Data'}
        </button>
      </div>
    </form>
  );
};

const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '2px solid #ADD8E6',
  borderRadius: '8px',
  backgroundColor: 'rgba(0., 0.2, 0.2, 0.2)',
  backdropFilter: 'blur(4px)',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '14px',
};

const inputStyle = {
  width: '300px', 
  padding: '10px',
  margin: '5px',
  fontSize: '16px',
  color: 'rgb(255, 255, 255)',
  border: '1px solid rgb(255, 255, 255)',
  backgroundColor: '#0000',
  borderRadius: '5px',
  WebkitBorderRadius: '5px',
  boxSizing: 'border-box',
  transition: 'background-color 0.3s, border-color 0.3s',
};

const submitButtonStyle = {
  width: '120px',
  height: '40px',
  padding: '3px',
  margin: '5px',
  textAlign: 'center',
  fontSize: '12px',
  color: '#fff',
  border: '1px solid #fff',
  backgroundColor: 'transparent',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, outline 0.3s',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    outline: '2px solid rgb(153, 207, 251)',
  },
};

export default Form;