import { styled } from "styled-components";
import styles from "../../Style";


export const Card = styled.div`
    background-color: #F8FAE4;
    border-radius: 46px;
    height: auto;
    width: 80%;
`;

export const Container = styled.div`
    height: 50%;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Visor = styled.div`
    background-color: ${styles.colors.blueCalculator};
    height: 50px;
    width: 100%;
    border-radius: 46px;
`;

export const Back = styled.div`
    height: 50px;
    width: 100%;
    padding-bottom: 4px;
    padding-right: 4px;
    background-color: ${styles.colors.calculatorBackColor};
    border-radius: 46px;
    /* :hover{
        padding-bottom: 1px;
    padding-right: 1px;
    } */
`;
