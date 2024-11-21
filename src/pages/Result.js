import React from 'react'
import axios from 'axios'

function Result() {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

  
    useEffect(() => {
        const getConstellations = async () => {
          try {
            let response = await axios.get("https://0140-34-168-67-255.ngrok-free.app/predict");
            setResult(response.data.prediction); 
          } catch (error) {
            console.error("Error fetching constellations:", error);
            setError("Failed to fetch constellation data."); 
          }
        };
    
        getConstellations(); 
      }, []); 
    
      
  return (
    <div className='h1 h1-light'>{result}</div>
  )
}

export default Result