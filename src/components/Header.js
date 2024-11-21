// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import './Header.css'; // Import the CSS file

function Header() {
    
    return (
        <>
        
        <div className="border border-primary bg-primary rounded border-3 border-top-0 w-100 p-4 me-2">
        <h1 className="h1 mx-1 position-absolute px-2 top-0 start-0">Starlight Tracker</h1>
        <button className='btn btn-secondary position-absolute top-0 start-0 mx-2 my-1 w-5 h-5 p-2' href='#sidebar' data-bs-toggle="offcanvas" aria-controls="sidebar">
    <i className="bi bi-layout-text-window-reverse position relative"  />
    </button>
            
            
    {/*<div className="scroll-container">  Scrollable container 
                
            </div>
            */}
            
            
        </div>
        <Sidebar />
        </>
    );
}

export default Header;
