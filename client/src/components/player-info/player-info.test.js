import React from "react";
import { shallow } from "enzyme";

import { PlayerInfo } from "./player-info.component";

describe("PlayerInfo component", () => {
  let wrapper;
  let mockTogglePlayersInfoHidden;
  let mockAddCrosshair;

  const mockInfo = {
    id: 1,
    name: "text",
    img: "jpg",
    role: "text",
    crosshairImg: "jpg",
    settings: {
      monitor: "a",
      mouse: "b",
      keyboard: "c",
      headset: "d",
      mousepad: "e",
    },
    crosshair: "text",
  };

  beforeEach(() => {
    mockTogglePlayersInfoHidden = jest.fn();
    mockAddCrosshair = jest.fn();

    const mockProps = {
      info: mockInfo,
      togglePlayersInfoHidden: mockTogglePlayersInfoHidden,
      addCrosshair: mockAddCrosshair,
    };

    wrapper = shallow(<PlayerInfo {...mockProps} />);
  });

  it("should render PlayerInfo component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render not render CrosshairOverview by default", () => {
    expect(wrapper.exists(".info__crosshair-overview")).toBe(false);
  });

  it("should call addCrosshairwhen button is clicked", () => {
    wrapper.find(".info__wrap").childAt(1).simulate("click");
    expect(mockAddCrosshair).toHaveBeenCalled();
  });
  
  it("should call togglePlayersInfoHidden when button is clicked", () => {
    wrapper.find(".info__close").simulate("click");
    expect(mockTogglePlayersInfoHidden).toHaveBeenCalled();
  });
  it("should return data values properly", () => {
    const name = wrapper.find(".info__heading").text();
    expect(name).toBe("text");
    const role = wrapper.find(".info__role").text();
    expect(role).toBe("text");
    const crosshair = wrapper.find(".info__show--text").text();
    expect(crosshair).toBe("text");
  });
});
