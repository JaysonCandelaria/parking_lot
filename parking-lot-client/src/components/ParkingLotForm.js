import React, { useState } from 'react';
import axios from 'axios';

const ParkingLotForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Small');
  const [time_in, setTimeIn] = useState('');
  const [rates, setRates] = useState('40.0');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/parking_lots', {
        parking_lot: {
          name,
          location,
          time_in,
          rates: parseFloat(rates),
        },
      });
      onCreate(response.data);
      setName('');
      setLocation('Small');
      setTimeIn('');
      setRates('40.0');
    } catch (error) {
      console.error('Error creating parking lot:', error);
    }
  };

  const formContainerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyle}>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Entrance:</label>
        <select value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Vehicle Size:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)} style={inputStyle} required>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Time In:</label>
        <input type="time" value={time_in} onChange={(e) => setTimeIn(e.target.value)} style={inputStyle} required />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Rates:</label>
        <input type="number" value={rates} onChange={(e) => setRates(e.target.value)} style={inputStyle} disabled />
      </div>
      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Create Parking Lot
      </button>
    </form>
  );
};

export default ParkingLotForm;
