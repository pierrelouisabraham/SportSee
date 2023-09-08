import React from 'react';
import Headers from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import "./style/Main.scss";
import UserProfile from './components/UserProfile.js';


function App() {
  const userId = 12;

  return (
    <div className='Page'>
      <Headers />
      <SideBar />
      <UserProfile userId={userId} />
    </div>
  );
}

export default App;
