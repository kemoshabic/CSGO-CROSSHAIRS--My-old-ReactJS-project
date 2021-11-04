import React from "react";
import { shallow } from "enzyme";
import { TeamsList } from "./teamslist.component";

describe("TeamsList Component", () => {
  let wrapper;
  let mockProps;
  // let useEffect;

  // const data = {
  //   teamName : {
  //   team: "text",
  //   imageUrl: "text",
  //   color: "text",
  //   players: ["a", "b", "c", "d", "e"],
  //   id: 1,
  //   teamsData: []
  //   }
  // }
  // const mockUseEffect = () => {
  //   useEffect.mockImplementationOnce(f => f());
  // };

  beforeEach(() => {
    // useEffect = jest.spyOn(React, "useEffect");

    mockProps = {
      // fetchTeamsStart: jest.fn().mockResolvedValue(data),
    };
    // mockUseEffect();
    wrapper = shallow(<TeamsList {...mockProps} />);
  });
  it("should render the TeamsList component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // describe("on start", () => {
  //   it("call fetchTeamsStart fucntion", () => {
  //     expect(mockProps.fetchTeamsStart).toHaveBeenCalled();
  //   });
  // });
});
