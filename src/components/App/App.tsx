import { Dispatch, useEffect } from 'react';
import { AnyAction, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { actions, RootState } from '../../store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { WeatherContainer } from '../Weather';
import { SettingsContainer } from '../Settings';
import { FetchError, GeoPoint } from '../../store/weather/types';
import { Alert } from '../Alert/Alert';
import './App.scss';

type Props = 
    ReturnType<typeof mapStateToProps> 
    & ReturnType<typeof mapDispatchToProps>;

function App(props: Props) {
    const { 
        geoPointAction, 
        errorState,
        errorAction,
        weather
    } = props;

    const onErrorClose = () => {
        errorAction({
            message: "",
            error: false,
        })
    }

    useEffect(() => {
        if(weather.length === 0) {
            // By default, on initial opening, request the current user’s location
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const center: GeoPoint = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    geoPointAction(center);
                },
                function(error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
        }
    }, [geoPointAction]);

    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    path="/" 
                    component={WeatherContainer}
                    exact />
                <Route 
                    path="/settings" 
                    component={SettingsContainer}
                    exact />
            </Switch>
            <Alert 
                open={errorState.error} 
                onClose={onErrorClose}
                message={errorState.message} 
                type="error" />
        </BrowserRouter>
    );
}

const mapStateToProps = (state: RootState) => ({
    errorState: state.weather.errorState,
    weather: state.weather.weather
});

const mapDispatchToProps = (
    dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>
) => ({
    geoPointAction: (center: GeoPoint) => 
        dispatch(actions.weather.geoPointAction(center)),
    errorAction: (error: FetchError) => 
        dispatch(actions.weather.errorAction(error)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);