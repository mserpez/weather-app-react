import { weatherService } from '../../services';

export const getWeatherDataAPI = weatherService.getWithRouteParams('/weather');
