import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import OverlayLoading from "../OverlayLoading";

jest.mock("react-loadingg/lib/BabelLoading", () => {
  return function DummyOverlayLoading(props) {
    return (
      <div data-testid="loadingAnimation" {...props} />
    );
  };
});


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a props", () => {
  act(() => {
    render(<OverlayLoading />, container);
  });
  expect(container.textContent).toBe("")

  act(() => {
    render(<OverlayLoading active={true} />, container);
  });
  expect(container.textContent).toBe("รอสักครู่")
  expect(container.querySelector("[data-testid='frame']")).toBeVisible()

  act(() => {
    render(<OverlayLoading
      active={true}
      moreStyles={{ backgroundColor: "red" }}
      moreTextStyles={{ fontSize: "40px" }}
      loadingText={"HelloWorld"}
    />, container);
  });
  expect(container.querySelector("[data-testid='frame']")).toBeVisible()
  expect(container.querySelector("[data-testid='frame']")).toHaveStyle("background-color: red;")
  expect(container.querySelector("[data-testid='loadingAnimation']")).toHaveAttribute("color", "#fff")
  expect(container.querySelector("[data-testid='loadingFont']")).toHaveStyle("font-size: 40px;")
  expect(container.querySelector("[data-testid='loadingFont']").textContent).toBe("HelloWorld")
});