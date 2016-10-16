import React, { Component, PropTypes } from 'react';

import Weather from '../components/Weather';
import Counter from '../components/Counter';
import Timer from '../components/Timer';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
import Image from '../components/Image';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  render() {
    
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <Weather />
          <Image image="img/rooms.png" />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <Clock interval={1000} />
          <Image image="img/news.png" />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <Image image="img/2016halloween.jpg" caption="Halloween 2016" />
        </div>
      </div>
    );
  }
}
