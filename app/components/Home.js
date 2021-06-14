import React, { useState } from 'react';
import { Pins } from './Pins';
import { Footer } from './Footer';
import data from '../../public/nyc_ttp_pins.json';

export const Home = (props) => {
  const [pins, setPins] = useState(data);
  return (
    <div>
      <div>Home Component Rendered</div>
      <Pins pins={pins} />
      <Footer />
    </div>
  );
};
