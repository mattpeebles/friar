import React from 'react';
import logo from './logo.svg';
import Header from "./components/header/header";
import Date from "./components/calendar/date/date";
import './App.scss';

function App()
{
  const finnhub = require('finnhub');

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
  const finnhubClient = new finnhub.DefaultApi();
  
  finnhubClient.companyBasicFinancials("AAPL", "margin", (error: any, data: any, response: any) =>
  {
    console.log(data)
  });

  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
