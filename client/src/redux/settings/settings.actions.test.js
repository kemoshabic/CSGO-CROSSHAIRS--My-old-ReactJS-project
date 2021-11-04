import settingsActionTypes from "./settings.types";
import {
  toggleCopiedButton,
  toggleSavedButton,
  addCrosshair,
  addSettings,
  removeSettings,
  removeCrosshair,
} from "./settings.actions";


describe('toggleCopiedButton action', () => {
  it('should create the toggleCopied action', () => {
    expect(toggleCopiedButton().type).toEqual(settingsActionTypes.TOGGLE_COPIED);
  });
});

describe('toggleSavedButton action', () => {
  it('should create the toggleSaved action', () => {
    expect(toggleSavedButton().type).toEqual(settingsActionTypes.TOGGLE_SAVED);
  });
});

describe('addCrosshair action', () => {
  it('should create the addCrosshair action', () => {
    const mockItem = {
      id: 1
    };
    const action = addCrosshair(mockItem);
    expect(action.type).toEqual(settingsActionTypes.ADD_CROSSHAIR);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('addSettings action', () => {
  it('should create the addSettings action', () => {
    const mockItem = {
      id: 1
    };
    const action = addSettings(mockItem);
    expect(action.type).toEqual(settingsActionTypes.ADD_SETTINGS);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeSettings action', () => {
  it('should create the removeSettings action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeSettings(mockItem);

    expect(action.type).toEqual(settingsActionTypes.REMOVE_SETTINGS);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeCrosshair action', () => {
  it('should create the removeCrosshair action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeCrosshair(mockItem);

    expect(action.type).toEqual(settingsActionTypes.REMOVE_CROSSHAIR);
    expect(action.payload).toEqual(mockItem);
  });
});





