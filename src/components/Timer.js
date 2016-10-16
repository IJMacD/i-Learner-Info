import React, { Component, PropTypes } from 'react';

export default class Timer extends Component {

  constructor(props, context) {
    super(props, context);

    this.interval = props.interval || 1000;
    this.state = {counter: props.counter || 0};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick(){
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div className="il-card-full mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text">{this.state.counter}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.state.counter % 2 === 0 ? 'even' : 'odd'}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Updates
          </a>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  counter: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired
};
