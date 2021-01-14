import React from 'react';
import HeaderLayout from './style';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderLayout>
            <ul className="tabsContainer">
                <li className="tabs">
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li className="tabs">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="tabs">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="tabs">
                    <Link to="/products">
                        Products
                    </Link>
                </li>
            </ul>
        </HeaderLayout>
    );
};

export default Header;
