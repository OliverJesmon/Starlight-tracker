import React from 'react'
import Andromeda from "../components/Andromeda.png"
import Aquila from "../components/Aquila.png"
import Auriga from "../components/Auriga.png"
function Cards(Props) {
  return (
    <>  
    <div className='album bg-body-tertiary'>
    <div className='container text-dark mw-100 p-5'>
     
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        <div className='col'>
          <div className="card bg-info-subtle position-static" style={{width:"18rem"}}>
            <img src={Andromeda} className="card-img-top" alt="Img not found"/>
            <div className="card-body">
              <h5 className="card-title">Andromeda</h5>
              <p className="card-text">{Props.desc}</p>
              <a href={Props.url} className="btn rounded-pill" style={{backgroundColor:"navy", color:'white'}}>Have a look</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-info-subtle position-static" style={{width:"18rem"}}>
            <img src={Aquila} className="card-img-top" alt="Img not found"/>
            <div className="card-body">
              <h5 className="card-title">Aquila</h5>
              <p className="card-text">{Props.desc}</p>
              <a href={Props.url} className="btn rounded-pill" style={{backgroundColor:"navy", color:'white'}}>Have a look</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-info-subtle position-static" style={{width:"18rem"}}>
            <img src={Auriga} className="card-img-top" alt="Img not found"/>
            <div className="card-body">
              <h5 className="card-title">Auriga</h5>
              <p className="card-text">{Props.desc}</p>
              <a href={Props.url} className="btn rounded-pill" style={{backgroundColor:"navy", color:'white'}}>Have a look</a>
            </div>
          </div>
        </div>
        
        </div>
        </div>
        </div>
        </>
  )
}

export default Cards