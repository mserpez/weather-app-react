import { combineReducers } from 'redux';

import { reducer as ServiceReducer, constants as ServiceConstants } from '@yuniku/make-request';

export default combineReducers({
  [ServiceConstants.NAME]: ServiceReducer,
});
