import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "./navbar.component";

it("should render Navbar component", () => {
  expect(shallow(<Navbar />)).toMatchSnapshot();
});
