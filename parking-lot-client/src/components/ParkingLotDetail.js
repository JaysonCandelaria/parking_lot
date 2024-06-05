import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParkingLotDetail = ({ parkingLot }) => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/parking_lots/${parkingLot.id}/parking_spaces`)
      .then(response => setSpaces(response.data))
      .catch(error => console.error('Error fetching parking spaces:', error));
  }, [parkingLot.id]);

  return (
    <div>
      <h2>{parkingLot.name}</h2>
      <h3>Location: {parkingLot.location}</h3>
      <h3>Capacity: {parkingLot.capacity}</h3>
      <h4>Parking Spaces:</h4>
      <ul>
        {spaces.map(space => (
          <li key={space.id}>
            {space.number} - {space.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingLotDetail;
