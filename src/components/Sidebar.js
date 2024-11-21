import React from 'react'

import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
function Sidebar() {
  return (
    <>
    
        <div className='container-fluid'>
        <div className='sidebar offcanvas offcanvas-start border border-right rounded col-md-2 col-lg-2 p-0 bg-body-tertiary bg-dark top-0 start-0' tabIndex={-1} id="sidebar" aria-labelledby="sidebarLabel" >
            <div className='offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto bg-dark'>
              
              <ul className='nav flex-column text-light'>
              <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/star-info">Star Info</Link>
                    <Link className="nav-link" to="/constellation-info">Constellation Info</Link>
                    
                    <Link className="nav-link" to="/space-news">Latest Space News</Link>
                    <Link className="nav-link" to="/feedback">Feedback</Link>
                    


        
                    <Link className="nav-link" to="/planetary-info">Planetary Info</Link>
                    <Link className="nav-link" to="/astronomy-events">Astronomy Events</Link>
                    <Link className="nav-link" to="/space-facts">Space Facts</Link>
                    <Link className="nav-link" to="/login" style={{ padding: '10px', textAlign: 'center' }}>Login</Link>
                    </ul>
    <Link className="nav-link" to="/signup" style={{ padding: '10px', textAlign: 'center' }}>Signup</Link>
    
      
    </div>
    </div>
    </div>
    </>
  );
}

export default Sidebar;
