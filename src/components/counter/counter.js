import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0
    };
    
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>My Counter</h1>
        <CounterEl counter={counter} />
        <button
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>
  
        <button
          onClick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }

  onIncrement() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  onDecrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }
};

// Test

export const doIncrement = prevState => ({
  counter: prevState.counter + 1
});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1
});

export const CounterEl = ({ counter }) => (
  <p>{counter}</p>
);