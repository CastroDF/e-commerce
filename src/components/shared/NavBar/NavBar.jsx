import React from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };
    return (
        <div className={styles.navBarContainer}>
            <ul>
                <li>
                    <Link style={linkStyle} to="/About">
						Nosotros
                    </Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/products">
						Productos
                    </Link>
                </li>
                <li>
                    <Link style={linkStyle} to="/Contact">
						Contacto
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
