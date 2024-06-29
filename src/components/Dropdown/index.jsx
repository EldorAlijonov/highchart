import React from 'react';
import { Dropdown, Button } from 'antd';
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropdownStyle } from './style';

const CustomDropdown = (props) => {
    const { title, options, onSelect, width } = props;

    const handleMenuClick = (e) => {
        if (onSelect) {
            onSelect(e.key);
        }
    };

    const items = options.map((option, index) => ({
        key: `${index}`,
        label: <div onClick={() => handleMenuClick({ key: index })}>{option}</div>,
    }));

    return (
        <DropdownStyle>
            <Dropdown menu={{ items }} placement="bottom" arrow>
                <Button width={width}>{title} <RiArrowDropDownLine size={24} className="icon" /></Button>
            </Dropdown>
        </DropdownStyle>
    );
};

export default CustomDropdown;
