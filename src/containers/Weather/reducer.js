// DEPENDENCIES
import dotProp from 'dot-prop-immutable';
// ACTION TYPES
import {
  SEARCH_WEATHER_DATA,
  REMOVE_HISTORY,
  SAVE_HISTORY,
} from './actionTypes';
import { REHYDRATE } from 'redux-persist';
// CONSTANTS
import { NAME } from './constants';

// DEFINE INITIAL STATE FOR WEATHER REDUCER.
const initialState = {
  historyData: [],
  data: null,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case REHYDRATE:
      // REHIDRATE REDUCER WITH PERSISTOR.
      return dotProp.set(state, 'historyData', action.payload && action.payload[NAME] ? action.payload[NAME].historyData : []);

    case SEARCH_WEATHER_DATA:
      // SAVE WEATHER INFORMATION IN REDUCER.
      return dotProp.set(state, 'data', action.data);

    case SAVE_HISTORY:
      // SAVE IN REDUCER HISTORY DATA ONLY LAST 5 ITEMS.
      const newData = [action.data, ...state.historyData].slice(0, 5);
      return dotProp.set(state, 'historyData', newData);

    case REMOVE_HISTORY:
      // REMOVE ITEM FROM REDUCER HISTORY DATA
      return dotProp.set(state, 'historyData', [...state.historyData.filter(item => item.id !== action.id)]);

    default:
      return state;
  }
};
