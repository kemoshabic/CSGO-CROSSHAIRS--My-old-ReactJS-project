import React from "react";
import { shallow } from "enzyme";
import { Directory } from "./directory.component"

import TeamCard from "../teamcard/teamcard.component"

describe("Directory component", () => {
  let wrapper;
  const mockSections = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockProps = {
      sections: mockSections,
    };

    wrapper = shallow(<Directory {...mockProps} />);
  });

  it("should render Directory component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it("should render an equal number of TeamCard component as the sections prop", () => {
    expect(wrapper.find(TeamCard).length).toEqual(mockSections.length)
  })

  it("should render not render any card if sections are empty", () => {
    const mockProps = {
      sections: [],
    };
    const newWrapper = shallow(<Directory {...mockProps} />)
    expect(newWrapper.exists('TeamCard')).toBe(false);
  });
});
