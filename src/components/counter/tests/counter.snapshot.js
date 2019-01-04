import React from "react";
import renderer from "react-test-renderer";

import Counter, { CounterEl } from "../counter";

describe("Counter Snapshot", () => {
  test("renderers", () => {
    const component = renderer.create(
      <Counter />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("CounterEl Snapshot", () => {
  test("renderers", () => {
    const component = renderer.create(
      <CounterEl counter={0} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});