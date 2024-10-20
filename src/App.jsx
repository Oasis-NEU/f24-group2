import React from 'react';

const CoOpCommutePlanner = () => {
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
            Whether you're commuting by car, public transportation, or ride-sharing, we've got you covered. Select an
            option below to get started and discover the most efficient way to reach your co-op.
          </p>
        </section>
        
        <section style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: 'darkgray', color: 'black', textAlign: 'center', flex: '1' }}>
            <h3>CarpoolNU</h3>
            <p>Join a carpool with fellow Northeastern students heading to the same area.</p>
            <button style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}>
              Select CarpoolNU
            </button>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'darkgray', color: 'black', textAlign: 'center', flex: '1' }}>
            <h3>Uber</h3>
            <p>Ride with Uber and get to your co-op quickly and easily.</p>
            <button style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}>
              Select Uber
            </button>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'darkgray', color: 'black', textAlign: 'center', flex: '1' }}>
            <h3>MBTA</h3>
            <p>Take the T or bus using the MBTA system for a budget-friendly commute.</p>
            <button style={{ backgroundColor: '#004080', color: 'white', padding: '10px', border: 'none' }}>
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
