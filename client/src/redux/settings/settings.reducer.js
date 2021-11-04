import settingsActionTypes from "./settings.types";

import { addItemToFavorite, removeItemFromFavorite } from "./settings.utils";

const INITIAL_STATE = {
  copied: false,
  saved: false,
  favoriteCrosshairs: [],
  favoriteSettings: [],
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingsActionTypes.TOGGLE_COPIED:
      return {
        ...state,
        copied: action.payload,
      };
    case settingsActionTypes.TOGGLE_SAVED:
      return {
        ...state,
        saved: action.payload,
      };
    case settingsActionTypes.ADD_CROSSHAIR:
      return {
        ...state,
        favoriteCrosshairs: addItemToFavorite(
          state.favoriteCrosshairs,
          action.payload
        ),
      };
    case settingsActionTypes.REMOVE_CROSSHAIR:
      return {
        ...state,
        favoriteCrosshairs: removeItemFromFavorite(
          state.favoriteCrosshairs,
          action.payload
        ),
      };
    case settingsActionTypes.ADD_SETTINGS:
      return {
        ...state,
        favoriteSettings: addItemToFavorite(
          state.favoriteSettings,
          action.payload
        ),
      };
    case settingsActionTypes.REMOVE_SETTINGS:
      return {
        ...state,
        favoriteSettings: removeItemFromFavorite(
          state.favoriteSettings,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default settingsReducer;
