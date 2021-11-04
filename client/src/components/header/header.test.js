import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";

describe("Header component", () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      currentUser: {
        uid: "123",
      },
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(wrapper.find(".header__text").at(3).text()).toBe("Sign Out");
    });
    it("should call signOutStart method when link is clicked", () => {
      wrapper.find(".header__signout").simulate("click");
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find(".header__text").at(3).text()).toBe("Sign In →");
    });
  });
});
