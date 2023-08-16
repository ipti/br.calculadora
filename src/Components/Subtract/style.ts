import { styled } from "styled-components";
import backgroundJournal from "../../assets/images/SubtractTop.png";
import backgroundBody from "../../assets/images/SubtractBody.png";
import backgroundBottom from "../../assets/images/SubtractBottom.png";


import styles from "../../Style";


export const Pratica = styled.div`
    border-radius: 49px;
    background-color: #F8FAE4;
    height: auto;
    width: 80%;
    padding: 36px;
`;

interface PropsIconPlus {
    color?: string
}


export const IconPlus = styled.div<PropsIconPlus>`
    color: ${props => props.color ? props.color : "black"};
    font-family: ${styles.typography.types.daleRegular};
    font-size: 57.022px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
`;

export const Title = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 57.022px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
    @media only screen and (max-width: 700px) {
       display: flex;
       flex-direction: column;
       font-size: 32px;
    }
`;
export const BackgroundTop = styled.div`
    border-top-right-radius: 49px;
    border-top-left-radius: 49px;
    background-image: url(${backgroundJournal});
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-size: 100%;
    max-height: auto;
    height: auto;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
`;

export const BackgroundBody = styled.div`
    border-radius: 49px;
    background-image: url(${backgroundBody});
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-size: 100%;
    height: auto;
    width: 100%;
    background-size: 100%;
    object-fit: cover;
`;

export const BackgroundBottom = styled.div`
    background-image: url(${backgroundBottom});
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-size: 100%;
    max-height: 140px;
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
`;


export const Container = styled.div`
    /* display: flex;
    flex-direction: column; */
    height: auto;
    width: 60%;
    @media only screen and (max-width: 700px) {
      width: 100%;
    }
`;