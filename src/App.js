import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feeds from './components/feed/Feeds';
import Widget from './components/widgets/Widget';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app_body">
      
        <Sidebar/>
        <Feeds/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
