import React, { useState } from 'react';

const CoOpCommutePlanner = () => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching routes for: ${address}`);
  };

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: 'white', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#004080', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Co-op Commute Planner</h1>
        <p>The personalized transportation guide for Northeastern co-op students</p>
      </header>

      <main style={{ padding: '20px' }}>
        <section style={{ backgroundColor: 'white', color: 'black', textAlign: 'left', padding: '10px' }}>
          <h2>Find the Best Route to Your Co-op</h2>
          <p>
            Whether you're commuting by car, public transportation, or ride-sharing, we've got you covered. Enter your
            address below to explore your route options.
          </p>
          
          {/* Search Bar Section */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
              style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button
              onClick={handleSearch}
              style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
            >
              Search
            </button>
          </div>
        </section>

        {/* New Heading */}
        <h3 style={{ textAlign: 'center', marginTop: '20px', color: 'black' }}>
          Or choose your preferred mode of transportation
        </h3>

        {/* Transportation Options */}
        <section style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: 'darkgray', textAlign: 'center', flex: '1' }}>
            <h3>CarpoolNU</h3>
            <p>Join a carpool with fellow Northeastern students heading to the same area.</p>
            <button
              style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}
            >
              Select CarpoolNU
            </button>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'darkgray', textAlign: 'center', flex: '1' }}>
            <h3>Uber</h3>
            <p>Ride with Uber and get to your co-op quickly and easily.</p>
            <button
              style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}
            >
              Select Uber
            </button>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'darkgray', textAlign: 'center', flex: '1' }}>
            <h3>MBTA</h3>
            <p>Take the T or bus using the MBTA system for a budget-friendly commute.</p>
            <button
              style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}
            >
              Select MBTA
            </button>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#004080', color: 'white', textAlign: 'center', padding: '20px' }}>
        <p>© 2024</p>
      </footer>
    </div>
  );
};

export default CoOpCommutePlanner;
