import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

it("renders without crashing", () => {
  shallow(<Counter />);
});

it("renders with initial zero", () => {
  const wrapper = shallow(<Counter />);
  console.log(wrapper);
  const welcome = <h3>Count: 0</h3>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
