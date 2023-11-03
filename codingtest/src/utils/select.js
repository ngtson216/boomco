import { createSelector } from 'reselect';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, dataPath, field) => {
  const selectReducer = () => Array.isArray(dataPath) ? state.getIn(dataPath) : state.get(dataPath);

  const createSelectorFunc = createSelector(selectReducer, (selectedReducer) =>
    selectedReducer.get(field)
  );

  return createSelectorFunc();
};
