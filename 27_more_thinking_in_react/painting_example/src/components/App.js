import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';
import About from './About';
import Login from './Login';
import {Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/*Navbar lives outside the routes because it should be rendered on every page.*/}
      <Navbar icon="paint brush" title="Painterest" description="our app" />

      <Route exact path="/" component={About} />
      <Route path='/login' component={Login} />
      <Route path='/paintings' component={PaintingContainer} />
    </div>
  );
};

export default App;
