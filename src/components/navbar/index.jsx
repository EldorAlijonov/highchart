import React from 'react';
import NavbarStyle from './style';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { UserImg } from '../../assets';

const Navbar = () => {

    const { NavbarDiv } = NavbarStyle;
    return (
        <NavbarDiv>
            <div className="navbar-conatiner">
                <h4 className="title">
                    Dashboard Overview
                </h4>
                <div className="search">
                    <IoSearch size={21} className="icon" />
                    <input type="text" placeholder="Search place ..." />
                </div>
                <div className="info">
                    <div className="bodge">
                        <FaRegBell className="icon" size={18} />
                    </div>
                    <img src={UserImg} alt="avatar" />
                </div>
            </div>
        </NavbarDiv>
    )
}

export default Navbar
