import React from "react";
import { shallow } from "enzyme";

import FormInput from "./form-input.component";

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;
  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "email",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find(".group__input").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should call handleChange method when input changes', () => {
    expect(wrapper.exists('.group__label')).toBe(true);
  })

  it('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists('.form-input-label')).toBe(false);
  });
});
