import React, { useState, useEffect } from 'react';
import './ParkingLotList.css';  // Import the CSS file

const ParkingLotList = ({ parkingLots, setSelectedLot }) => {
  // Function to calculate total hours and minutes
  const calculateTotalHours = (timeIn) => {
    const currentTime = new Date();
    const timeInDate = new Date(timeIn);
    const timeDifference = Math.abs(currentTime - timeInDate);
    const totalHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const totalMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    return { hours: totalHours, minutes: totalMinutes };
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
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup function
  }, []); // Run effect only once on component mount

  // Filter parking lots by location
  const smallLots = parkingLots.filter(lot => lot.location === 'S');
  const mediumLots = parkingLots.filter(lot => lot.location === 'M');
  const largeLots = parkingLots.filter(lot => lot.location === 'L');

  return (
    <div className="parking-lot-list">
      <h2>Parking Lots</h2>

      {/* Small Parking Lot Table */}
      <div>
        <h3>SP</h3>
        <div className="table-container">
          <table className="table">
            {/* Table headers */}
            <thead>
              <tr>
                <th>Plate Number</th>
                <th>Time In</th>
                <th>Rates</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {smallLots.map(lot => (
                <tr key={lot.id} onClick={() => setSelectedLot(lot)}>
                  <td>{lot.name}</td>
                  <td>{lot.time_in}</td>
                  <td>{lot.rates}</td>
                  <td>{`${calculateTotalHours(lot.time_in).hours} hours ${calculateTotalHours(lot.time_in).minutes} minutes`}</td>
                  <td>
                    {lot.status}
                      <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                      >
                        Unpark
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Medium Parking Lot Table */}
      <div>
        <h3>MP</h3>
        <div className="table-container">
          <table className="table">
            {/* Table headers */}
            <thead>
              <tr>
                <th>Plate Number</th>
                <th>Time In</th>
                <th>Rates</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {mediumLots.map(lot => (
                <tr key={lot.id} onClick={() => setSelectedLot(lot)}>
                  <td>{lot.name}</td>
                  <td>{lot.time_in}</td>
                  <td>{lot.rates}</td>
                  <td>{`${calculateTotalHours(lot.time_in).hours} hours ${calculateTotalHours(lot.time_in).minutes} minutes`}</td>
                  <td>
                    {lot.status}
                      <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                      >
                        Unpark
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Large Parking Lot Table */}
      <div>
        <h3>LP</h3>
        <div className="table-container">
          <table className="table">
            {/* Table headers */}
            <thead>
              <tr>
                <th>Plate Number</th>
                <th>Time In</th>
                <th>Rates</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {largeLots.map(lot => (
                <tr key={lot.id} onClick={() => setSelectedLot(lot)}>
                  <td>{lot.name}</td>
                  <td>{lot.time_in}</td>
                  <td>{lot.rates}</td>
                  <td>{`${calculateTotalHours(lot.time_in).hours} hours ${calculateTotalHours(lot.time_in).minutes} minutes`}</td>
                  <td>
                    {lot.status}
                      <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                      >
                        Unpark
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ParkingLotList;
