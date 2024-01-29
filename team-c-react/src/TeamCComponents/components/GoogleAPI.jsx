import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleSheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spreadsheetId = '1DBOyFtpVACYbmM8PxVw1w3s-giw-usznCgVfZ94gW8E';
        const apiKey = 'AIzaSyCHkP1jx1QryyzOjsP3zfQ-_maluEjbOL8';
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`);
        
        // Extract the data from the response
        const sheetData = response.data.values;
        setData(sheetData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetData;
