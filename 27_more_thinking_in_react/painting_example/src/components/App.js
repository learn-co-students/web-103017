import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';
import About from './About';
import Login from './Login';


const App = () => {
  return (
    <div>
      <Navbar icon="paint brush" title="Painterest" description="our app" />
      { /* <About /> */}
      { /* <Login /> */}
      <PaintingContainer />
    </div>
  );
};

export default App;
