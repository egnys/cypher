import React from 'react';
import mark from '../images/exclamation-mark.png'
const Error = (props) => {
    return (
        <div className='bg-white text-red-500 w-80 rounded-full flex justify-center items-center'>
            <img className="h-6" src={mark} alt=""/>
            <p>Число {props.numb} повинно бути простим.</p>
        </div>
    );
};

export default Error;