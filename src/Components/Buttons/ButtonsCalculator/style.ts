import { styled } from "styled-components";

import styles from "../../../Style";


interface ButtonsAttributes {
    width?: string
}

export const Buttons = styled.div<ButtonsAttributes>`
    background-color: ${styles.colors.blueCalculator};
    height: 50px;
    width: ${props => props.width || 50}px;
    border-radius: 46px;
    display: flex;
    cursor: url("/cursor_header.png"), pointer;

    :active {
       display: none;
    }
    h1{
        margin: auto;
        color: #FFF;
        font-family: ${styles.typography.types.daleRegular};
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.859px; /* 107.745% */
        letter-spacing: 0.12px;


        @media only screen and (max-width: 300px) {
            font-size: 17px;       
        }
    }
`;

export const Back = styled.div<ButtonsAttributes>`
    height: 50px;
    width: ${props => props.width || 50}px;
    padding-bottom: 4px;
    padding-right: 4px;
    background-color: ${styles.colors.calculatorBackColor};
    border-radius: 46px;
    :hover{
        padding-bottom: 1px;
    padding-right: 1px;
    }
`;


// ////////////////////
export const ButtonsNextProx = styled.div<ButtonsAttributes>`
    background-color: ${styles.colors.blueCalculator};
    height: 50px;
    width: ${props => props.width || 50}px;
    border-radius: 46px;
    display: flex;
    cursor: url("/cursor_header.png"), pointer;

    @media only screen and (max-width: 600px) {
    height: 49px;
    width: 150px;
    border-radius: 46px;
    }
    
    :active {
       display: none;
    }
    h1{
        margin: auto;
        color: #FFF;
        font-family: ${styles.typography.types.daleRegular};
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.859px; /* 107.745% */
        letter-spacing: 0.12px;


        @media only screen and (max-width: 300px) {
            font-size: 17px;       
        }
    }
`;

export const BackProx = styled.div<ButtonsAttributes>`
    height: 50px;
    width: ${props => props.width || 50}px;
    padding-bottom: 4px;
    padding-right: 4px;
    background-color: ${styles.colors.calculatorBackColor};
    border-radius: 46px;
    :hover{
        padding-bottom: 1px;
    padding-right: 1px;
    }

    @media only screen and (max-width: 600px) {
    height: 49px;
    width: 150px;
    border-radius: 46px;
    }
`;