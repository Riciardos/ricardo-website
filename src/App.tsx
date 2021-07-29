import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './containers/Main';
import TopGrid from './containers/TopGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopGrid />
      <Main />
      <footer>Nothing on this page is promised to work. If you break it, you buy it.</footer>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
  );
}

export default App;
