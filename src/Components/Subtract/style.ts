import { styled } from "styled-components";
import backgroundJournal from "../../assets/images/journal.svg";
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
    font-family: Dela Gothic One;
    font-size: 27.94px;
    font-style: normal;
    font-weight: bold;
    line-height: 20.955px; 
    letter-spacing: 0.14px;
`;

export const Title = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 57.022px;
    font-style: normal;
    font-weight: bold;
    line-height: 42.766px; /* 75% */
    letter-spacing: 0.285px;
`;
export const BackgroundJournal = styled.div`
    background-image: url(${backgroundJournal});
    background-size: 100%;
    height: 100%;
    width: 100%;
    background-size: 80%;
    background-repeat: no-repeat;
    object-fit: cover;
    /* img{
        width: 20%;
    } */

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