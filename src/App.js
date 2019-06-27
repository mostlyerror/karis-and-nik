import React from 'react';
import './App.css';
import Header from './Header.js';
import OurStory from './OurStory.js';
import Rsvp from './Rsvp.js';
import TheDayOf from './TheDayOf.js';

function App() {
  return (
    <div className="App">
      <Header />
      <TheDayOf />
      <OurStory />
      <Rsvp />
    </div>
  );
}

export default App;
