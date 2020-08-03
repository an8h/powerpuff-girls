import React from "react";
import renderer from "react-test-renderer";
import ItemToshow from "./index";

const props = {
  item: {
    name: "This is a test name",
    summary: "This is a test summary",
    image: {
      medium: "",
      original: "",
    },
    rating: "5,6",
  },
};

describe("ItemToshow Component", () => {
  let component;

  beforeEach(() => {
    component = renderer.create(<ItemToshow item={props.item} />);
  });

  it("should render correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
