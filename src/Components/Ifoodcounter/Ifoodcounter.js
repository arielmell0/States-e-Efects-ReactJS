import React, { useState } from 'react';
import '../Ifoodcounter/Ifoodcounter.css'

const Ifoodcounter = () => {
    const [ value, setValue ] = useState(0);
    const [ buttonStyle, setButtonStyle ] = useState("counter-button-minus-desactive")

    const down = () => {
        if (value > 0) {
            setValue(value - 1);
        }

        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive");
        }
    };

    const up = () => {
        setValue(value + 1);
        setButtonStyle("counter-button-minus-active")
    };

    return (
        <div className="counter-wrapper">
            <button
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>

            <p>{value}</p>

            <button 
                className='counter-button-plus-active'
                onClick={up}
            >
                +
            </button>
        </div>
    );
};

export default Ifoodcounter;