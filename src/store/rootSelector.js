import {createSelector} from "reselect";

/**
 * Select domain
 */
export const selectDomain = (state, key) => {
  return {
    state,
    key,
  };
};

export const reSelector = createSelector(selectDomain, (data) => {
  if (!data.key) {
    return null;
  }
  return data.state?.[data.key]
});
