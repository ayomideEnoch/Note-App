import React from 'react';
import takeNote from './component/takeNote';
// You have fourty five minutes time. Please create a basic note taking app, use any resource. The app should alow you to take notes, save them, use them later. No need for a database or anything, the user's notes will be lost once they exit the session. Make it look good, both desktop mobile. Do whatever you can to blow me away in 45 minutes. 12:15 Central Time
function App() {
  return (
    <div className="note-taking-app">
      <takeNote />
    </div>
  );
}

export default App;
