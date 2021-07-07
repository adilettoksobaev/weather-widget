import { NavLink } from 'react-router-dom';
import { IWeather } from '../../store/weather/types';
import { CityCreatorContainer } from '../CityCreator';
import './Settings.scss';

type Props = {
    weather: IWeather[];
    deleteItem: (item: IWeather) => void;
    setWeatherAction: (weather: IWeather[]) => void;
    handleDrag: (e: any) => void;
    handleDrop: (e: any) => void;
};

export function Settings(props: Props) {
    const { 
        weather, 
        deleteItem, 
        handleDrag, 
        handleDrop 
    } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    <div className="settings">
                        <div className="settings__head">
                            <span>Settings</span>
                            <NavLink to='/'>
                                <svg className="settings__close" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                </svg>
                            </NavLink>
                        </div>
                        <ul className="settings__row">
                            {weather
                                .sort((a, b) => a.order - b.order)
                                .map(item => (
                                    <li 
                                        key={`settings-list-${item.id}`}
                                        className="settings__item"
                                        id={item.id.toString()}
                                        draggable={true}
                                        onDragOver={(ev) => ev.preventDefault()}
                                        onDragStart={handleDrag}
                                        onDrop={handleDrop}>
                                        <svg 
                                            className="settings__icon" 
                                            focusable="false" 
                                            viewBox="0 0 24 24">
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                        </svg>
                                        <span draggable={false}>{item.city}, {item.country}</span>
                                        <svg 
                                            className="settings__icon delete" 
                                            focusable="false" 
                                            viewBox="0 0 24 24"
                                            onClick={() => deleteItem(item)}>
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
                                        </svg>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col col-12">
                    <CityCreatorContainer />
                </div>
            </div>
        </div>
    );
};