import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

export default function() {
  const [data, setData] = useState();
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchDisplayData = async displayDataId => {
    const result = await axios(
      `http://localhost:9000/api/${displayDataId}/display`
    );
    setDisplayData(prevState => [...prevState, result.data]);
  };

  const fetchData = async () => {
    const result = await axios('http://localhost:9000/api');
    setData(result.data);
    result.data.forEach(item => fetchDisplayData(item));
  };

  return (
    <div className="home-container">
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
  );
}
