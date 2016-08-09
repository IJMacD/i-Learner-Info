import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Clock extends Component {

  constructor(props, context) {
    super(props, context);

    this.interval = props.interval || 1000;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick(){
    this.setState({});
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className="il-card-full il-card-time mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text"><span className="date-time">{moment().format("YYYY-MM-DD HH:mm:ss")}</span></h2>
          </div>
          <div className="mdl-card__supporting-text">
            Current date and time is <span className="date-time">{moment().format("YYYY-MM-DD HH:mm:ss")}</span>.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              View Updates
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  interval: PropTypes.number.isRequired
};
