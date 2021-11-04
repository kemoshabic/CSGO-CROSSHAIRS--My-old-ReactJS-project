import settingsActionTypes from "./settings.types";
import settingsReducer from "./settings.reducer";
import { text } from "body-parser";

const initialState = {
  copied: false,
  saved: false,
  favoriteCrosshairs: [],
  favoriteSettings: [],
};

const mockItem = {
  team: "text",
  name: "text",
  crosshair: "text",
  id: 1,
  imageUrl: "text",
};

describe("settingsReducer", () => {
  it("should return initial state", () => {
    expect(settingsReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle copied to true with toggleCopied action", () => {
    const mockBool = {
      boolVal: true,
    };

    expect(
      settingsReducer(initialState, {
        type: settingsActionTypes.TOGGLE_COPIED,
        payload: mockBool,
      }).copied.boolVal
    ).toBe(true);
  });
  it("should toggle saved to false with toggleSaved action", () => {
    const mockPrevState = {
      copied: false,
      saved: true,
      favoriteCrosshairs: [],
      favoriteSettings: [],
    };

    const mockBool = {
      boolVal: false,
    };

    expect(
      settingsReducer(mockPrevState, {
        type: settingsActionTypes.TOGGLE_SAVED,
        payload: mockBool,
      }).saved.boolVal
    ).toBe(false);
  });

  it("should add crosshair to favoriteCrosshairs list and first element should have id of 1", () => {

    expect(
      settingsReducer(initialState, {
        type: settingsActionTypes.ADD_CROSSHAIR,
        payload: mockItem,
      }).favoriteCrosshairs[0].id
    ).toBe(1);
  });

  it("should remove crosshair from favoriteCrosshairs if removeCrosshair action fired with payload of existing item", () => {

    const mockPrevState = {
      copied: false,
      saved: true,
      favoriteCrosshairs: [mockItem],
      favoriteSettings: [],
    };

    expect(
      settingsReducer(mockPrevState, {
        type: settingsActionTypes.REMOVE_CROSSHAIR,
        payload: mockItem,
      }).favoriteCrosshairs.includes((crosshair) => crosshair.id === 1)
    ).toBe(false);
  });

  it("should add settings to favoriteSettings list and first element should have id of 1", () => {

    expect(
      settingsReducer(initialState, {
        type: settingsActionTypes.ADD_SETTINGS,
        payload: mockItem,
      }).favoriteSettings[0].id
    ).toBe(1);
  });

  it("should remove setting from favoriteSettings if removeSettings action fired with payload of existing item", () => {

    const mockPrevState = {
      copied: false,
      saved: true,
      favoriteCrosshairs: [],
      favoriteSettings: [mockItem],
    };

    expect(
      settingsReducer(mockPrevState, {
        type: settingsActionTypes.REMOVE_SETTINGS,
        payload: mockItem,
      }).favoriteSettings.includes((crosshair) => crosshair.id === 1)
    ).toBe(false);
  });
});
