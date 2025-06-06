import React, { useState } from 'react';

const CustomSelect = ({ options, onSelect }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState(options[0]);

    const toggleSelect = () => {
        setIsActive(!isActive);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsActive(false);
        onSelect(value);
    };

    return (
        <div data-select className={isActive ? 'active' : ''} onClick={toggleSelect}>
            <div data-selecct-value>{selectedValue}</div>
            {isActive && (
                <div>
                    {options.map((option, index) => (
                        <div key={index} data-select-item onClick={() => handleSelect(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
