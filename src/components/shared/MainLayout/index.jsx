import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Section from '../Section';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <NavBar />
                <Section>{children}</Section>
            </div>
        </div>
    );
};

export default MainLayout;
