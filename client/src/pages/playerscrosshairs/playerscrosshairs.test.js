import React from "react";
import { shallow } from "enzyme";
import { PlayersCrosshairs } from "./playerscrosshairs.component";
describe("PlayersCrosshairs component", () => {
  let wrapper;
  let mockRemoveCrosshair;
  const mockSavedCrosshairs = [{
    crosshair: 'text',
    id: 1,
    name: 'text',
    team: 'text',
    imageUrl: 'text',
  }]
  beforeEach(() => {
    mockRemoveCrosshair = jest.fn();
    const mockProps = {
      savedCrosshairs: mockSavedCrosshairs,
      copied: false,
      removeCrosshair: mockRemoveCrosshair,
    };

    wrapper = shallow(<PlayersCrosshairs {...mockProps} />);
  });

  it("should render CheckoutPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call removeCrossair function when button is clicked", () => {
    wrapper.find(".crosshair__delete").simulate("click");
    expect(mockRemoveCrosshair).toHaveBeenCalled();
  });

  it("should not render crosshair preview when there is no data", () => {
    const mockProps = {
      savedCrosshairs: [],
      copied: false,
      removeCrosshair: mockRemoveCrosshair,
    };

    const newWrapper = shallow(<PlayersCrosshairs {...mockProps} />);
    expect(newWrapper.exists('.crosshair__wrap')).toBe(false);
  });

  it("should render only 1 saved crosshair and length should be 1", () => {
    expect(mockSavedCrosshairs).toHaveLength(1);
  });
});
