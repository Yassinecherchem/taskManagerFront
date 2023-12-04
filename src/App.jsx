
import * as React from 'react';
import DashBoard from './components/DashBoard';
import './App.css';
import Lists from './components/Lists';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';




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
