import React from "react";
import renderer from "react-test-renderer";
import DetailPage from "./index";

const props = {
  location: {
    pathname: "/detail",
    search: "",
    hash: "",
    key: "",
    state: {
      clicked: true,
      clickedItem: {
        name: "this is a clicked item",
        summary: "This is a test summary",
        image: {
          medium: "",
          original: "",
        },
      },
    },
  },
};

describe("DetailPage Component", () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <DetailPage
        location={props.location}
        clickedItem={props.location.state.clickedItem}
      />
    );
  });

  it("should render correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
