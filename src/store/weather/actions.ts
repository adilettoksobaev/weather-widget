import { ActionCreator, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '..';
import store from '../store';
import { FetchError, GeoPoint, IFetchErrorAction, IGeoPointAction, IGetWeatherAction, IWeather, WeatherActionTypes } from './types';

const apiKey = "9f2283a8fb67caf1c20ddf2bc5f705b6";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather";

export type WeatherActions = 
    IGetWeatherAction
    | IGeoPointAction
    | IFetchErrorAction;

export const getWeatherAction: ActionCreator<ThunkAction<Promise<any>, RootState, string, IGetWeatherAction>> = 
    (city: string) => {
    return async (dispatch: ThunkDispatch<RootState, void, Action<any>>) => {
        try {
            const apiCall = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
            const response = await apiCall.json();

            // If the city is not defined
            if (response.cod === "404") {
                const failAction: IFetchErrorAction = {
                    type: WeatherActionTypes.FETCH_ERROR,
                    errorState: {
                        message: response.message,
                        error: true
                    }
                };
                dispatch(failAction);
            }

            const weather = store.getState().weather.weather;

            const currentWeather: IWeather = {
                id: response.id,
                city: response.name,
                country: response.sys.country,
                celsius: calCelsius(response.main.temp),
                feelsLike: calCelsius(response.main.feels_like),
                humidity: response.main.humidity,
                description: capitalizeFirstLetter(response.weather[0].description),
                main: response.weather[0].main,
                visibility: calcKm(response.visibility),
                pressure: response.main.pressure,
                speed: response.wind.speed,
                dewPoint: calcDewPoint(calCelsius(response.main.temp), response.main.humidity),
                rangeId: response.weather[0].id,
                icon: response.weather[0].icon,
                order: weather.length
            }

            const index = weather.findIndex((item) => item.id === currentWeather.id);

            let newWeather: IWeather[];
            if(index === -1) {
                newWeather = weather.concat(currentWeather);
            } else {
                newWeather = replaceItemAtIndex(weather, index, currentWeather);
            }
            const successAction: IGetWeatherAction = {
                type: WeatherActionTypes.GET_WEATHER,
                weather: newWeather
            };
            dispatch(successAction);
        }
        catch (err) {
            // error log
            console.log("error:", err.message);
        }
    }
}

export const setWeatherAction: ActionCreator<IGetWeatherAction> = (weather: IWeather[]) => {
    return {
        type: WeatherActionTypes.GET_WEATHER,
        weather
    }
}

export const geoPointAction: ActionCreator<ThunkAction<Promise<any>, RootState, string, IGeoPointAction>> = 
    (center: GeoPoint) => {
    return async (dispatch: ThunkDispatch<RootState, void, Action<any>>) => {
        try {
            const apiCall = await fetch(
                `${apiUrl}?lat=${center.latitude}&lon=${center.longitude}&appid=${apiKey}`
            );
            const response = await apiCall.json();

            const weather = store.getState().weather.weather;

            const currentWeather: IWeather = {
                id: response.id,
                city: response.name,
                country: response.sys.country,
                celsius: calCelsius(response.main.temp),
                feelsLike: calCelsius(response.main.feels_like),
                humidity: response.main.humidity,
                description: capitalizeFirstLetter(response.weather[0].description),
                main: response.weather[0].main,
                visibility: calcKm(response.visibility),
                pressure: response.main.pressure,
                speed: response.wind.speed,
                dewPoint: calcDewPoint(calCelsius(response.main.temp), response.main.humidity),
                rangeId: response.weather[0].id,
                icon: response.weather[0].icon,
                order: weather.length
            }

            const index = weather.findIndex((item) => item.id === currentWeather.id);
            let newWeather: IWeather[];
            if(index === -1) {
                newWeather = weather.concat(currentWeather);
            } else {
                newWeather = weather
            }

            const successAction: IGeoPointAction = {
                type: WeatherActionTypes.GEO_POINT,
                center,
                weather: newWeather
            };

            dispatch(successAction);
        }
        catch ({response}) {
            // error log
            console.log("error:", response);
        }
    }
}

export function errorAction(error: FetchError) {
    const action: IFetchErrorAction = {
        type: WeatherActionTypes.FETCH_ERROR,
        errorState: error
    }
    return action;
}

// Edit by index
function replaceItemAtIndex(arr: IWeather[], index: number, newValue: IWeather) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// Get сelsius
function calCelsius(temp: number) {
    let cell = Math.floor(temp - 273.15);

    return cell;
}

function calcKm(meters: number) {
    const km = meters / 1000;

    return Number(km.toFixed(1));
}

function capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// Get dew point
function calcDewPoint(temp: number, humidity: number) {
    const x = Math.log(humidity / 100) + ((17.269 * temp) / (237.3 + temp));
    const dewPoint = (237.3 * x) / (17.269 - x);

    return Math.round(dewPoint);
}