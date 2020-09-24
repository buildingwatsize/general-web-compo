import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PreviewPanel from "../PreviewPanel";

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

let firstDivForBorderWithBottomLine, secondDivForSpaceBetween, leftPanel, allPanel

it("renders with or without a props", () => {
  act(() => {
    render(<PreviewPanel />, container);
  });
  firstDivForBorderWithBottomLine = container.querySelector("[data-testid='border']")
  secondDivForSpaceBetween = firstDivForBorderWithBottomLine.querySelector("[data-testid='aligner']")
  leftPanel = secondDivForSpaceBetween.querySelector("[data-testid='leftPanel']")
  allPanel = secondDivForSpaceBetween.textContent
  expect(leftPanel).toHaveStyle({ "margin-right": "36px", "width": "100%" });
  expect(leftPanel).toHaveTextContent("")
  expect(allPanel).toContain("")

  act(() => {
    render(<PreviewPanel leftPanel="test" rightPanel="Some Content" />, container);
  });
  firstDivForBorderWithBottomLine = container.querySelector("[data-testid='border']")
  secondDivForSpaceBetween = firstDivForBorderWithBottomLine.querySelector("[data-testid='aligner']")
  leftPanel = secondDivForSpaceBetween.querySelector("[data-testid='leftPanel']")
  allPanel = secondDivForSpaceBetween.textContent
  expect(leftPanel).toHaveStyle({ "margin-right": "36px", "width": "100%" });
  expect(leftPanel).toHaveTextContent("test")
  expect(allPanel).toContain("Some Content");

  act(() => {
    render(<PreviewPanel leftPanel={<div>Hi</div>} rightPanel="Another Content" />, container);
  });
  firstDivForBorderWithBottomLine = container.querySelector("[data-testid='border']")
  secondDivForSpaceBetween = firstDivForBorderWithBottomLine.querySelector("[data-testid='aligner']")
  leftPanel = secondDivForSpaceBetween.querySelector("[data-testid='leftPanel']")
  allPanel = secondDivForSpaceBetween.textContent
  expect(leftPanel).toHaveStyle({ "margin-right": "36px", "width": "100%" });
  expect(leftPanel).toHaveTextContent("Hi")
  expect(allPanel).toContain("Another Content");
});