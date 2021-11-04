import { createSelector } from "reselect";

const selectSettingsData = (state) => state.settingsData;

export const selectIfCopied = createSelector(
  [selectSettingsData],
  (settings) => settings.copied
)
export const selectIfSaved = createSelector(
  [selectSettingsData],
  (settings) => settings.saved
)
export const selectFavoriteCrosshairs = createSelector(
  [selectSettingsData],
  (settings) => settings.favoriteCrosshairs
)
export const selectFavoriteSettings = createSelector(
  [selectSettingsData],
  (settings) => settings.favoriteSettings
)
