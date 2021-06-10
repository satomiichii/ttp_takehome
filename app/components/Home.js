import React from 'react';
import axios from 'axios';
import { Pins } from './Pins';
import data from '../../public/nyc_ttp_pins.json';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    console.log(data);
    return (
      <div>
        <div>Home Component Rendered</div>
        <Pins />
      </div>
    );
  }
}
