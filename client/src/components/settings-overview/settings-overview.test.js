import React from "react";
import { shallow } from "enzyme";
import Settings from "./settings-overview.component";

describe("Settings component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      settings: {
        headset: "text",
      },
    };

    wrapper = shallow(<Settings {...mockProps} />);
  });

  it("should render Settings component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return expect value in displayed text", () => {
    const text = wrapper.find(".overview__text").at(0).text();
    expect(text).toEqual("text");
  });
});
