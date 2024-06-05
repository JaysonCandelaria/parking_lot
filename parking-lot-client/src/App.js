import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParkingLotList from './components/ParkingLotList';
import ParkingLotDetail from './components/ParkingLotDetail';
import ParkingLotForm from './components/ParkingLotForm'; 

const App = () => {
  const [parkingLots, setParkingLots] = useState([]);
  const [selectedLot, setSelectedLot] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/parking_lots')
      .then(response => setParkingLots(response.data))
      .catch(error => console.error('Error fetching parking lots:', error));
  }, []);
  const handleCreate = (newLot) => {
    setParkingLots([...parkingLots, newLot]);
  };
  return (
    <div>
      <h1>Parking Lot System</h1>
      <ParkingLotForm onCreate={handleCreate} />
      <ParkingLotList parkingLots={parkingLots} setSelectedLot={setSelectedLot} />
      {selectedLot && <ParkingLotDetail parkingLot={selectedLot} />}
    </div>
  );
}

export default App;
