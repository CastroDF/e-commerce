import React from 'react';
import HeaderLayout from './style';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderLayout>
            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </HeaderLayout>
    );
};

export default Header;
