import React, { Component, PropTypes } from 'react';

import '../styles/Weather.scss';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { temperature: 26};
  }

  render() {
    const { temperature } = this.state;

    return (
      <div className="il-card-full il-card-weather mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text">{temperature} °C</h2>
        </div>
        <div className="mdl-card__actions">
          <span className="il-card-weather__status">Current Weather</span>
        </div>
      </div>
    );
  }
}
