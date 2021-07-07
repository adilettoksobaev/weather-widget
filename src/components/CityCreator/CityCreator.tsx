import './CityCreator.scss';

type Props = {
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addItem: () => void;
};

export function CityCreator(props: Props) {
    const {
        inputValue,
        onChange,
        addItem
    } = props;

    return (
        <div className="city-creator">
            <div className="city-creator__title">Add location:</div>
            <div className="city-creator__row">
                <input 
                    className="city-creator__input" 
                    type="text" 
                    value={inputValue} 
                    onChange={onChange} />
                <div
                    className="city-creator__btn"
                    onClick={addItem}>
                    <svg 
                        className="city-creator__icon" 
                        focusable="false" viewBox="0 0 24 24">
                        <path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};