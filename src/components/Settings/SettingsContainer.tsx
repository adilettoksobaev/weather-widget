import { Dispatch, useState } from 'react';
import { AnyAction, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { actions, RootState } from '../../store';
import { Settings } from './Settings';
import { IWeather } from '../../store/weather/types';

type Props = 
    ReturnType<typeof mapStateToProps> 
    & ReturnType<typeof mapDispatchToProps>;

function SettingsContainer(props: Props) {
    const { 
        weather, 
        setWeatherAction
    } = props;

    const [dragId, setDragId] = useState<number | null>(null);

    // Remove a city from the list
    const deleteItem = (item: IWeather) => {
        const index = weather.findIndex((listItem) => listItem.id === item.id);
        const newList = removeItemAtIndex(weather, index);
        setWeatherAction(newList);
    };

    const handleDrag = (e: any) => {
        setDragId(Number(e.currentTarget.id));
    };

    const handleDrop = (e: any) => {
        if(dragId) {
            const dragBox = weather.find((box) => box.id === dragId);
            const dropBox = weather.find((box) => box.id === Number(e.currentTarget.id));
            
            const dragBoxOrder = dragBox && dragBox.order;
            const dropBoxOrder = dropBox && dropBox.order;

            // Reorder the cities by dragging
            const newBoxState = weather.map((box) => {
                if (box.id === dragId) {
                    box.order = dropBoxOrder!;
                }
                if (box.id === Number(e.currentTarget.id)) {
                    box.order = dragBoxOrder!;
                }
                return box;
            });
        
            setWeatherAction(newBoxState);
        }
    };

    return (
        <Settings 
            weather={weather} 
            deleteItem={deleteItem} 
            setWeatherAction={(weather: IWeather[]) => setWeatherAction(weather)} 
            handleDrag={handleDrag} 
            handleDrop={handleDrop} />
    );
};

const mapStateToProps = (state: RootState) => ({
    weather: state.weather.weather,
});

const mapDispatchToProps = (
    dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>
) => ({
    setWeatherAction: (weather: IWeather[]) => 
        dispatch(actions.weather.setWeatherAction(weather))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer);

function removeItemAtIndex(arr: IWeather[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}