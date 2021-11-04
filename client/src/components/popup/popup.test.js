import React from "react";
import { shallow } from "enzyme";

import { PopUp } from "./popup.component"

describe("PopUp component", () => {
  let wrapper;
  let mockTogglePopUp;

  beforeEach(() => {
    mockTogglePopUp = jest.fn();

    const mockProps = {
      error: {
        message: "error logging in"
      },
      togglePopUp: mockTogglePopUp,
    };

    wrapper = shallow(<PopUp {...mockProps} />);
  });

  it('should render PopUp component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return errorText length greater than 0", () => {
    const errorText = wrapper.find('.error__text').text();
    expect(errorText.length).toBeGreaterThan(0)
  })

  it("should return no error message if error message is not defined", () => {
    const mockProps = {
      error: {
        message: ""
      },
      togglePopUp: mockTogglePopUp,
    };

    const newWrapper = shallow(<PopUp {...mockProps} />);
    const errorText = newWrapper.find('.error__text').text();
    expect(errorText).toEqual('');
  })
  it("should call togglePopUp", () => {
    wrapper.find('.error__close').simulate('click');
    expect(mockTogglePopUp).toHaveBeenCalled();
  })
});
