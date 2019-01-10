import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import App from "./App";
import testI18nComponent from "./i18n/testI18nComponent";

const Wrapper = testI18nComponent(App);

it("matches shallow snapshot", () => {
  const wrapper = shallow(<Wrapper />);
  expect(wrapper).toMatchSnapshot();
});

it("matches mount snapshot", () => {
  const wrapper = mount(<Wrapper />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  expect(() => {
    const div = document.createElement("div");
    ReactDOM.render(<Wrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
  }).not.toThrow();
});
