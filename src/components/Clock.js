import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import '../styles/Clock.scss';

export default class Clock extends Component {

  constructor(props, context) {
    super(props, context);

    this.interval = props.interval || 1000;
    this.state = { now: moment() }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick(){
    this.setState({now: moment()});
  }

  render() {
    const { now } = this.state;

    return (
      <div className="il-card-full il-card-clock mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text"><span className="date-time">{now.format("HH:mm:ss")}</span></h2>
        </div>
        <div className="mdl-card__supporting-text">
          Today's date is <span className="date-time">{now.format("dddd, Do MMMM YYYY")}</span>.
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  interval: PropTypes.number.isRequired
};
