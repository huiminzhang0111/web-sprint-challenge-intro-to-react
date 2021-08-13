// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        opacity: scale(1);
    }
`
const StyledCharacter = styled.div`
    font-size:40px;
    width: 80%;
    animation: ${kf} 1s ease-in-out forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-left: 10%;
    padding: 8px;
    color: white;
    font-weight: bold;
    border: 5px solid #d2d2d2;
    box-shadow: 0px 6px 10px -2px #807f7f;
    border-radius: 8px;


    @media ${pr => pr.theme.breakpointMobile} {
        width: initial;
    }

    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${pr => pr.theme.teriaryColor};
        color: ${pr => pr.theme.black};
    }

    button {
        background-color: ${pr => pr.theme.teriaryColor};
        margin-left: 30px;
        &:hover {
            transform: scale(1.1);
        }
    }
`

const Character = props => {
    return (
        <StyledCharacter>
            {props.info.name}
            
            <button onClick={() => props.openDetails(props.info.url)}>
                {props.info.birth_year}
            </button>
        </StyledCharacter>
    )
}

export default Character;