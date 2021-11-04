import React from "react";
import { shallow } from "enzyme";
import { TeamCard } from "./teamcard.component";

describe("TeamCard component", () => {
  let wrapper;
  let mockAddPlayersInfo;
  const mockTeam = "Faze";
  const mockImageUrl = "www.image.com";
  const mockColor = "#222222";
  let mockPlayers = [];
  const mockTeamColor = "#255555";
  let mockTeamData = [];

  beforeEach(() => {

    mockAddPlayersInfo = jest.fn();

    const mockProps = {
      section: {
        team: mockTeam,
        imageUrl: mockImageUrl,
        color: mockColor,
        players: mockPlayers,
        teamColor: mockTeamColor,
        teamsData: mockTeamData,
      },
      addPlayersInfo: mockAddPlayersInfo,
    };

    wrapper = shallow(<TeamCard {...mockProps} />);
  });

  it("should render TeamCard component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return no players because no players are provided", () => {
    expect(wrapper.find(".directory-item__grey-box").length).toEqual(0);
  });
  it("should render team prop in Team div", () => {
    expect(wrapper.find(".directory-item__heading").text()).toBe(mockTeam);
  });
  it("should call addPlayersInfo if players are provided", () => {
    mockPlayers = ["dev1ce"];
    mockTeamData = [
      {
        id: 1,
        name: "text",
        img: "text",
        role: "text",
        crosshairImg: "text",
        settings: {},
        crosshair: "text",
      },
    ];

    const mockProps = {
      section: {
        team: mockTeam,
        imageUrl: mockImageUrl,
        color: mockColor,
        players: mockPlayers,
        teamColor: mockTeamColor,
        teamsData: mockTeamData,
      },
      addPlayersInfo: mockAddPlayersInfo,
    };
    const newWrapper = shallow(<TeamCard {...mockProps} />);

    newWrapper.find("#test-id").first().simulate("click");
    expect(mockAddPlayersInfo).toHaveBeenCalled();
  });

  it("should render first players name", () => {
    expect(wrapper.find(".directory-item__player").first().text()).toBe(mockPlayers[0]);
  });
});
