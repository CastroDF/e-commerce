import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';


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
