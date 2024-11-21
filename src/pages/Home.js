import React, { useEffect, useState } from 'react';
import Props from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../components/Header.css';
import Cards from '../components/Cards';

function Home() {
    const [stars, setStars] = useState([]);
    
    const openUrl=()=> {
        
        window.open("http://localhost:7000", "_blank");
    }
    

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await axios.get('/api/stars');
                setStars(response.data);
            } catch (err) {
                console.error("Error fetching stars:", err);
            }
        };
        fetchStars();
    }, []);

    return (
        <>
        <div className='container-fluid mw-50 mh-10 mt-5 p-5'>
        <Link to='/FileUpload'><button className='btn btn-secondary position-absolute top-55 end-0 translate-middle-y'>Upload / Capture</button></Link>

            <h2>Welcome to Starlight Tracker</h2>
            <h3>Famous Stars</h3>
            {/*<ul>
                {stars.map(star => (
                    <li key={star.id}>{star.name}</li>
                ))}
            </ul>*/}
    </div>
    
        
        <Cards />
      
      

  
        </>
    );
}

export default Home;
