import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DropdownStyle } from './style';

const Dropdown = (props) => {
    const { title, options, onSelect, width } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [openUpwards, setOpenUpwards] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const updateDropdownPosition = () => {
        if (dropdownRef.current) {

            // dropdovnni ekrandagi holatini olish uchun getBoundingClientRect() ishlatiladi
            const rect = dropdownRef.current.getBoundingClientRect();

            // ekran balandligini olish uchun window.innerHeigth ishlatiladi
            const viewportHeight = window.innerHeight;

            if (rect.bottom + 200 > viewportHeight) {
                setOpenUpwards(true);
            } else {
                setOpenUpwards(false);
            }
        }
    };
    useEffect(() => {
        updateDropdownPosition();
        window.addEventListener('resize', updateDropdownPosition);
        return () => window.removeEventListener('resize', updateDropdownPosition);
    }, []);

    return (
        <DropdownStyle $width={width} $openUpwards={openUpwards}>
            <button className="dropdown-button" onClick={toggleDropdown} ref={dropdownRef}>
                {title}
                <RiArrowDropDownLine className={`${isOpen ? "icon" : ""}`} size={24} />
            </button>
            {isOpen && (
                <div className={`dropdown-menu ${openUpwards ? 'upwards' : ''}`}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </DropdownStyle>
    );
};

export default Dropdown;
