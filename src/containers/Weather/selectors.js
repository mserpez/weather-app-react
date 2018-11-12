import { NAME } from './constants';

export const getWeatherData = state => state[NAME].data;
export const getWeatherHistoryData = state => state[NAME].historyData;
