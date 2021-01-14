import React from 'react';
import section from './section.module.css';


const Section = ({children}) => {
    return (
        <section style={section.style}>
            {children}
        </section>
    );
};

export default Section;
