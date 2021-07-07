import { connect } from 'react-redux';
import { RootState } from '../../store';
import { Weather } from './Weather';

type Props = 
    ReturnType<typeof mapStateToProps>;

function WeatherContainer(props: Props) {
    const {
        weather
    } = props;

    return (
        <Weather 
            weather={weather}/>
    );
};

const mapStateToProps = (state: RootState) => ({
    weather: state.weather.weather,
});

export default connect(
    mapStateToProps
)(WeatherContainer);