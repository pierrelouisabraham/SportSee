import React from 'react';
import UserProfile from './components/UserProfile.js';

function App() {
  const userId = 12;

  return (
    <div className="App">
      <UserProfile userId={userId} />
    </div>
  );
}

export default App;
