import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {CardContainer, CardBody, ElevatedImage } from './style';
import RRLogo from '../../../assets/RRLogo.png';

const FlipCard = ({ card }) => {
    const [flipped, set] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <CardContainer
            onClick={() => set(state => !state)}
        >
            <CardBody style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <div className="imageContainer">
                    <img
                        className="image"
                        src={card.profileImage && card.profileImage.src}
                        alt={card.profileImage && card.profileImage.alt}
                    />
                </div>
                <div className="description">
                    <ElevatedImage src={RRLogo} alt="Mastery 7" />
                    <h2 className="name">
                        {card.firstName + ' ' + card.lastName}
                    </h2>
                </div>
            </CardBody>
            <CardBody className="card" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <div className="imageContainer">
                    <img
                        className="image"
                        src={card.profileImage && card.profileImage.src}
                        alt={card.profileImage && card.profileImage.alt}
                    />
                </div>
                <div className="description">
                    <ElevatedImage src={RRLogo} alt="Mastery 7" />
                    <h2 className="name">
                        {card.firstName}
                    </h2>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default FlipCard;
