// import { ButtonGroup, Button, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {

  const[news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=57b61cb423b14f0283e1c5808a8ac6ee')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);


  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner className="margin-top" animation="border" variant="primary" />
          :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw=> <News news={nw}></News>)
        }
      </Row>
      }
    </div>
  );
}

export default App; 
