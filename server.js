const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace 'YOUR_API_KEY' and 'YOUR_SPREADSHEET_ID' with your actual API key and Google Sheets ID
const apiKey = 'AIzaSyADRCZdMrUeVtAMm2hVEe_B85g9mME3OJ8';
const spreadsheetId = '1Eaznj490dBCOGQCC0s9E3_AKHAD9RYFpv3TCG9Dq9vQ';

app.get('/data', async (req, res) => {
  try {
    // Fetch data from Google Sheets API
    const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`);
    
    // Send the data to the client
    res.json(response.data.values);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
