import { useEffect } from 'react';
import './Alert.scss';

type Props = {
    open: boolean;
    message: string;
    onClose: () => void;
    type: "success" | "error";
};

export function Alert(props: Props) {
    const {
        open,
        message,
        onClose,
        type
    } = props;

    useEffect(() => {
        if(open === true) {
            setTimeout(() => {
                onClose();
            }, 5000);
        }
    }, [open, onClose]);

    return (
        <>
            {open && 
                <div 
                    className={`alert ${open ? "show" : "hide"} ${type}`}>
                    <div>{message}</div>
                    <svg
                        onClick={onClose}
                        className="alert__close" 
                        focusable="false" 
                        viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                    </svg>
                </div>
            }
        </>
    );
};