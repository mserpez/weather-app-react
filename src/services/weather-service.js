import { Api } from '@yuniku/make-request';

const apiBaseUrl = 'https://api.openweathermap.org/data/2.5';

const apiHeaders = {
  'Content-Type': 'application/json',
};

export const weatherService = new Api(apiBaseUrl, { timeout: 30000, headers: apiHeaders });
