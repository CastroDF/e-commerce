import React from 'react';
import { storiesOf } from '@storybook/react';
import FlipCard from './';
import DiegoCastro from '../../../assets/DiegoCastro.jpg';

const card = {
    firstName: 'Diego',
    lastName: 'Castro',
    profileImage: {
        src: DiegoCastro,
        alt: 'Diego Casto Picture',
    },
    age: 20,
    birthDate: '24/01/00',
};

// eslint-disable-next-line no-undef
storiesOf('Flip Card', module)
    .add('default', () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FlipCard card={card} />
            </div>
        );
    });