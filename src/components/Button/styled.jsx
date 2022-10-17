import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 88vw;
    height: 42px;
    background-color: ${props => props.color};
    padding: 12px 16px;
    border-radius: 2px;
    border: none;
    transition: 0.2s;
    margin: 8px 16px;

    p {
        height: 18px;
        text-align: center;
        color: var(--black);
    }

    :active {
        transform: scale(0.98)
    }
`