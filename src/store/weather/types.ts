import { Action } from 'redux';

export interface WeatherState {
    weather: IWeather[],
    center: GeoPoint | null,
    errorState: FetchError
}

export enum WeatherActionTypes {
    GET_WEATHER = 'GET_WEATHER',
    GEO_POINT = 'GEO_POINT',
    FETCH_ERROR = 'FETCH_ERROR'
}

export interface IGetWeatherAction extends Action<WeatherActionTypes.GET_WEATHER> {
    weather: IWeather[]
}

export interface IGeoPointAction extends Action<WeatherActionTypes.GEO_POINT> {
    center: GeoPoint | null,
    weather: IWeather[]
}

export interface IFetchErrorAction extends Action<WeatherActionTypes.FETCH_ERROR> {
    errorState: FetchError
}

export type FetchError = {
    message: string,
    error: boolean
}

export interface IWeather {
    id: number;
    city: string;
    country: string;
    celsius: number;
    humidity: number;
    description: string;
    main: string;
    visibility: number;
    pressure: number;
    speed: number;
    feelsLike: number;
    dewPoint: number;
    rangeId: number;
    icon: string;
    order: number;
}

export type GeoPoint = {
    latitude: number;
    longitude: number;
}