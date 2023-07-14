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
    cursor: pointer;
    :active {
       display: none;
    }
    h1{
        margin: auto;
        color: white;
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