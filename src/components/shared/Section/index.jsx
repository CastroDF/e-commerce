import React from 'react';
import SectionLayout from './style';


const Section = ({children}) => {
    return (
        <SectionLayout>
            <section className='sectionContainer'>
                {children}
            </section>
        </SectionLayout>
    );
};

export default Section;
