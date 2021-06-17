import React, { useState } from 'react';
import { Pins } from './Pins';
import { Footer } from './Footer';
import { Nav } from './Nav';
import data from '../../public/nyc_ttp_pins.json';

export const Home = (props) => {
  const [pins, setPins] = useState(data);
  return (
    <div className="contents-container">
      <Nav />
      <Pins pins={pins} />
      <Footer />
    </div>
  );
};
