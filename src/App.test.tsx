import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const Component = <App />;
  render(Component);
  it("renders a homepage", () => {
    expect.hasAssertions();

    expect(screen.getByTestId("portfolio-page")).toBeInTheDocument();
  });
});
