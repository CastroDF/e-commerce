import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

const boxShadow = css`
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
`;

export const CardContainer = styled.div`
    position: relative;
    width: 17rem;
    height: 25rem;
    padding: 0;
    margin: 0;
    transition: all 0.5s ease-out;
    &:hover {
        transform: translateY(-1rem);
    }
    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 3.125rem;
        background-color: #292854;
        font-family: Avenir Heavy;
    }
    .name {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.2em;
        color: white;
        font-family: "Bangers";
        text-align: center;
    }
    .imageContainer {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .image {
        height: 100%;
        width: 100%;
    }
`;

export const CardBody = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform, opacity;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0);
    transition: all 0.4s ease-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    ${CardContainer}:hover & {
        ${boxShadow}
    }
`;

export const ElevatedImage = styled.img`
    position: absolute;
    z-index: 20;
    width: 3rem;
    height: 3.3rem;
    top: -2.5rem;
    transition: top ease 0.8s;
    ${CardContainer}:hover & {
        top: -3rem;
    }
`;