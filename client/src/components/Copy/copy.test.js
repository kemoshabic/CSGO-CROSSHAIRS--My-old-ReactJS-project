import React from "react";
import { shallow } from "enzyme";
import { Copy } from "./copy.component";

it("should render copy component", () => {
  const mockProps = {
    crosshair: "crosshairData",
  };
  expect(shallow(<Copy crosshair={mockProps} />)).toMatchSnapshot();
});
