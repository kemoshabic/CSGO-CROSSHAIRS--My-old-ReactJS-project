import React from "react";
import { shallow } from "enzyme";
import { PlayersSettings } from './playerssettings.component'
describe("PlayersSettings component", () => {
  let wrapper;
  let mockRemoveSettings;
  let mockSavedSettings = [
    {
      team: 'text',
      name: 'text',
      id: 1,
      settings: [],
    }
  ]
  beforeEach(() => {
    mockRemoveSettings = jest.fn(); 
    const mockProps={
      savedSettings: mockSavedSettings,
      removeSettings: mockRemoveSettings
    }
    wrapper = shallow(<PlayersSettings {...mockProps} />);
  });

  it('should render the PlayersSettings component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it("should call removeSettings function when button is clicked", () => {
    wrapper.find(".settings__delete").simulate("click");
    expect(mockRemoveSettings).toHaveBeenCalled();
  });
  
  it("should call removeSettings function when button is clicked", () => {
    wrapper.find(".settings__delete").simulate("click");
    expect(mockRemoveSettings).toHaveBeenCalled();
  });

});