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

  handleConditionalIncrement() {
    this.props.actions.incrementIfOdd();
  }

  handleAsyncIncrement() {
    this.props.actions.incrementAsync();
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label" style={{color:this.props.counter % 2 === 0 ? 'red' : 'blue'}}>Value is {this.props.counter}</div>
        <div className="counter-progress">
          <div style={{width: this.props.counter + "%"}}></div>
        </div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'steven' : 'codd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
          <button onClick={() => {this.handleConditionalIncrement();}}>if odd</button>
          <button onClick={() => {this.handleAsyncIncrement();}}>async</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
