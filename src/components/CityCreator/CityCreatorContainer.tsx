import { Dispatch, useState } from 'react';
import { AnyAction, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { actions } from '../../store';
import { CityCreator } from './CityCreator';

type Props = 
    ReturnType<typeof mapDispatchToProps>;

function CityCreatorContainer(props: Props) {
    const {
        getWeatherAction
    } = props;

    const [inputValue, setInputValue] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // Add a new city
    const addItem = () => {
        getWeatherAction(inputValue);
        setInputValue('');
    };

    return (
        <CityCreator 
            inputValue={inputValue}
            onChange={onChange}
            addItem={addItem} />
    );
};

const mapDispatchToProps = (
    dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>
) => ({
    getWeatherAction: (city: string) => 
        dispatch(actions.weather.getWeatherAction(city)),
});

export default connect(
    null,
    mapDispatchToProps
)(CityCreatorContainer)