import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import './App.css';

function App() {
  return (
    <html class="h-full bg-gray-100">
      <div className="App">
        <body class="h-full">
          <DashBoard/>
        </body>
      </div>
    </html>
  );
}

export default App;