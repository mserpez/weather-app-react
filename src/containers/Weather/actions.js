import { makeRequest } from '@yuniku/make-request';
import { SEARCH_WEATHER_DATA, SAVE_HISTORY, REMOVE_HISTORY } from './actionTypes';
import { getWeatherDataAPI } from './api';
import { WEATHER_SERVICE_KEY } from '../../services/constants';

// ACTION TO GET WHEATHER DATA, AND SAVE HISTORY OF SEARCH.
export function getWeatherData(city, saveHistory = true) {
  return (dispatch) => {
    makeRequest(getWeatherDataAPI, { query: { q: city, appid: WEATHER_SERVICE_KEY } }, dispatch, { shouldNormalize: false })
      .then((res) => {
        dispatch({
          type: SEARCH_WEATHER_DATA,
          data: res,
        });
        if (saveHistory) {
          dispatch({
            type: SAVE_HISTORY,
            data: { name: res.name, id: new Date().toString() },
          });
        }
      });
  };
}

// ACTION TO REMOVE HISTORY OF SEARCH.
export function removeHistory(id) {
  return dispatch => dispatch({ type: REMOVE_HISTORY, id });
}
