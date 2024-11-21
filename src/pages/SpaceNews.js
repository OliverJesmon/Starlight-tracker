
import Props from 'prop-types'
import React, { useEffect, useState } from 'react';
import '../services/api'

import getNews from '../services/api';

function SpaceNews() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    getNews()
      .then((data) => setNews(data.articles))
      .catch((error) => setError(error));
  }, []);

    return (
        <>
        <div className='container-fluid mw-50 mh-10 mt-5 p-5 overflow-auto'>
        <h2>Space News</h2>
        <h3>Let's have a look on what's brewing new</h3>
        </div>
        <div className='album bg-body-tertiary'>
        <div className='container text-dark mw-100 p-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {news.map((article) => (
            <div className='col'>
                <div className="card bg-info-subtle position-static" style={{width:"18rem"}}>
        <img src={article.urlToImage} className="card-img-top" alt={article.title}/>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn rounded-pill" style={{backgroundColor:"navy", color:'white'}}>Have a look</a>
            </div>
            </div>
            </div>
    ))}
    {error && <p>Error: {error.message}</p>}
    </div>
    </div>
    </div>
        </>
    );
}
export default SpaceNews;
