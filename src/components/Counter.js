import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className="il-card-full il-card-weather mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">{this.props.counter}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            {this.props.counter % 2 === 0 ? 'even' : 'odd'}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a onClick={() => {this.handleDecrement();}} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              -
            </a>
            <a onClick={() => {this.handleIncrement();}} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              +
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
