import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';


function App() {
  return (
    <div className="App">
        {/* Sidebar */}
         <Sidebar/>
        {/* Feed */}
         <Feed/>
        {/* Widget */}
         <Widget/>

    </div>
  );
}

export default App;
