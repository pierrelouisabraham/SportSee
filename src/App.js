import React from 'react';
import UserProfile from './components/UserProfile.js';


function App() {
  const userId = 12;

  return (
      <UserProfile userId={userId} />
  );
}

export default App;
