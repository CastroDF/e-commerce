import React from 'react';
import NavBarLayout from './style';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <NavBarLayout>
            <div className="navBarContainer">
                <ul>
                    <li>
                        <Link className="linkStyle" to="/About">
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link className="linkStyle" to="/products">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link className="linkStyle" to="/Contact">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </NavBarLayout>
    );
};

export default NavBar;
