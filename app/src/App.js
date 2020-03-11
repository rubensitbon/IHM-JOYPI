import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchDisplayData = async displayDataId => {
    const result = await axios(`http://localhost:9000/api/${displayDataId}`);
    console.log(
      'result in fetchdisplayData',
      result,
      'of displayDataId',
      displayDataId
    );
    console.log(
      'result.data in fetchdisplayData',
      result.data.toString(),
      'of displayDataId',
      displayDataId
    );
    console.log('displayData in fetchdisplayData', displayData);
    setDisplayData(prevState => [...prevState, result.data]);
  };

  const fetchData = async () => {
    const result = await axios('http://localhost:9000/api');
    setData(result.data);
    console.log('result.data', result.data);
    result.data.forEach(item => fetchDisplayData(item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>JoyPi IHM - Centrale Lille</h1>
      </header>
      <div className="App-body">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          List of all available Components :
          {data &&
            data.map(item => <div style={{ marginRight: '10px' }}>{item}</div>)}
        </div>

        {displayData &&
          displayData.map(item => (
            <div dangerouslySetInnerHTML={{ __html: item }}></div>
          ))}
      </div>
    </div>
  );
}

export default App;
