import axios from 'axios';
//https://newsapi.org/v2/everything?q=astronomy&from=2024-10-16&sortBy=publishedAt&apiKey=c8f76dbd36604acabbb6ca5e3572a19c
const NewsAPI_url='https://newsapi.org/v2/everything';
const NewsAPI_token='c8f76dbd36604acabbb6ca5e3572a19c';
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Change to your backend URL
});
const getNews = async () => {
    try {
      const response = await axios.get(NewsAPI_url,{params:{
        q:'astronomy',
        sortBy: 'publishedAt',
        language: 'en',
        apiKey: NewsAPI_token,
        }
    });
    
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  

export default getNews;
/*{
  "prediction": "Pegasus"
}
  */