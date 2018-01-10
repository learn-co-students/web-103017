import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';

const App = () => {
  return (
    <div>
      <Navbar icon="paint brush" title="Painterest" description="our app" />
      <PaintingContainer />
    </div>
  );
};

export default App;
