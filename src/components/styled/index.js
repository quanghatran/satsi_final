import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
`

export const Button = styled.button`
    padding: 1.5rem 3rem;
    border-radius: 1rem;
    background-color: transparent;
    border: 1px solid white;
    color: ${props => props.theme.colors.text};
`

export const TurnIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 0.9;
        transform: translateX(0);
    }
`

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
`