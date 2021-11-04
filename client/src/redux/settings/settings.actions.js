import settingsActionTypes from "./settings.types";

export const toggleCopiedButton = (boolVal) => ({
  type: settingsActionTypes.TOGGLE_COPIED,
  payload: boolVal
})
export const toggleSavedButton = (boolVal) => ({
  type: settingsActionTypes.TOGGLE_SAVED,
  payload: boolVal
})
export const addCrosshair = item => ({
  type: settingsActionTypes.ADD_CROSSHAIR,
  payload: item,
});
export const addSettings = item => ({
  type: settingsActionTypes.ADD_SETTINGS,
  payload: item,
});

export const removeSettings = item => ({
  type: settingsActionTypes.REMOVE_SETTINGS,
  payload: item,
});
export const removeCrosshair = item => ({
  type: settingsActionTypes.REMOVE_CROSSHAIR,
  payload: item,
});


