import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Home from "./index";

const mockStore = configureStore([]);

describe("Home Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      movie: {
        data: [],
        isLoading: false,
        errors: [],
      },
      episodes: {
        data: [],
        isLoading: false,
        errors: [],
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
