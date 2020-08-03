import React from "react";
import renderer from "react-test-renderer";
import Episodes from "./index";

const props = {
  episodes: [
    { name: "This is a test name", airdate: "2020-01-03" },
    { name: "This is a test name", airdate: "2020-01-03" },
  ],
};

describe("Episodes Component", () => {
  let component;

  beforeEach(() => {
    component = renderer.create(<Episodes episodes={props.episodes} />);
  });

  it("should render correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
