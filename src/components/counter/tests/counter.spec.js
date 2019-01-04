import React from "react";
import Counter, { doIncrement, doDecrement, CounterEl } from "../counter";

describe("Counter component", () => {
  it("renders the Counter wrapper", () => {
    const wrapper = shallow(<Counter />);

    expect(wrapper.find(CounterEl)).to.have.length(1);
  });
  
  // Way to test onClick event with Enzyme:
  it('increments the counter by clicking Increment', () => {
    const wrapper = shallow(<Counter />);
  
    wrapper.setState({ counter: 0 });
    wrapper.find('button').at(0).simulate('click');
  
    expect(wrapper.state().counter).to.equal(1);
  });
  
  it('decrements the counter by clicking Decrement', () => {
    const wrapper = shallow(<Counter />);
  
    wrapper.setState({ counter: 0 });
    wrapper.find('button').at(1).simulate('click');
  
    expect(wrapper.state().counter).to.equal(-1);
  });
});

describe("Counter component - Local State", () => {
    // Way to test local state changes with Mocha/Chai:
  it("should increment the counter state by one", () => {
    const state = { counter: 0 }
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });
  it("should decrement the counter state by one", () => {
    const state = { counter: 0 }
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  });

});
