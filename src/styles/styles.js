import styled, {css, keyframes} from 'styled-components'


export const rotateAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg)
    }
`

export const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: black;
    color: white;
`

export const StyledTitle = styled.h1`
    color: ${props => props.color || props.theme.color.primary};
`

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || '0'};
`

export const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background-color: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || props.theme.color.primary};
    &:focus {
        outline: none;
    };
    @media ${props => props.theme.media.phone} {
        border: 1px solid red;
    }

    @media ${props => props.theme.media.tablet} {
        border: 1px solid green;
    }
`

export const StyledButton = styled.button`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.33s;
    &:focus {outline: none;};
    &:hover {
        animation: ${rotateAnimation} 1s infinite linear;
    }
    align-self: ${props => props.align || 'stretch'};

    ${props => props.primary && css`
        color: ${props => props.color || props.theme.color.primary};
        background: ${props => props.background || 'white'};
    `}

    ${props => props.outlined && css`
        /* color: ${props => props.color || 'white'}; */
        color: ${props => props.color || props.theme.color.primary};

        border: 1px solid ${props => props.color || "white"};
        background: transparent;
    `}

`

export const LargeButton = styled(StyledButton)`
    font-size: 32px;
`;

export const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || props.theme.color.primary};
`;