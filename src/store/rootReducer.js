import { combineReducers } from 'redux';

import { reducer as ServiceReducer, constants as ServiceConstants } from '@yuniku/make-request';
import { reducer as ReduxFormReducer } from 'redux-form';
import { reducer as WeatherReducer, constants as WeatherConstants } from '../containers/Weather';

export default combineReducers({
  [ServiceConstants.NAME]: ServiceReducer,
  form: ReduxFormReducer,
  [WeatherConstants.NAME]: WeatherReducer,
});
