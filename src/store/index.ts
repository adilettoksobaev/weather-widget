import { StateType } from 'typesafe-actions';
import rootReducer from './root-reducer';

import * as weatherActions from './weather/actions';

export { default } from './store';
export { default as rootReducer } from './root-reducer';

export const actions = {
    weather: weatherActions,
}

export type RootState = StateType<typeof rootReducer>;
