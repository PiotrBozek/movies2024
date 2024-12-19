import React from 'react';

import './Input.css';

const Input = (props) => {
    const handleChange = (e) => {
        e.preventDefault();
        props.onFormSubmit(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='wyszukiwarka filmu'
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;
