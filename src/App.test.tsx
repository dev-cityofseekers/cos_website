import React from "react";
import { render } from "./test-utils";
import App from "./App";

describe("App Component", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test("renders main sections", () => {
    const { container } = render(<App />);

    // Check that key sections exist
    expect(container.querySelector("#welcome")).toBeInTheDocument();
    expect(container.querySelector("#COS\\?")).toBeInTheDocument();
    expect(container.querySelector("#Gallery")).toBeInTheDocument();
    expect(container.querySelector("#where")).toBeInTheDocument();
    expect(container.querySelector("#FAQ")).toBeInTheDocument();
    expect(container.querySelector("#team")).toBeInTheDocument();
  });
});
