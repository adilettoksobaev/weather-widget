import { WeatherActions } from "./actions";
import { WeatherState, WeatherActionTypes } from './types';
import { Reducer } from "redux";

const defaultState: WeatherState = {
    weather: [],
    center: null,
    errorState: {
        message: "",
        error: false
    }
};

const defaultStateGetStorage: WeatherState =  JSON.parse(localStorage.getItem('weatherReducer') || '{}');
const defaultStateNew = Object.assign({}, defaultState, defaultStateGetStorage);

const weatherReducerPrivate: Reducer<WeatherState, WeatherActions> = (
    state = defaultState,
    action) => {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER:
            return {
                ...state,
                weather: action.weather
            }
        case WeatherActionTypes.GEO_POINT:
            return {
                ...state,
                center: action.center,
                weather: action.weather
            }
        case WeatherActionTypes.FETCH_ERROR:
            return {
                ...state,
                errorState: action.errorState
            }
        default:
            return state;
    }
};

export const weatherReducer: Reducer<WeatherState, WeatherActions> = (
    state = defaultStateNew, action) => {
        const newState = weatherReducerPrivate(state, action);
        localStorage.setItem('weatherReducer', JSON.stringify(newState));
        return newState;
    }

export default weatherReducer;