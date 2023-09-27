import { styled } from "styled-components";
import backgroundBody2 from "../../assets/images/SubtractAutoAvaliacao.png";
import backgroundLogin from "../../assets/images/SubtractLogin.png";
import styles from "../../Style";
import frontImg from "../../assets/images/SubtractTop.png"

export const Sheet = styled.div`
    border-radius: 49px;
    background: url(${backgroundBody2});
    background-repeat: no-repeat;
    height: auto;
    margin: auto;
    width: 70%;
    background-size: 100%;
    object-fit: cover;

    @media only screen and (max-width: 1070px) {
       background: #f8fae4;
       width: 100%;
    }
`;


export const SheetLogin = styled.div`
    border-radius: 49px;
    background: url(${backgroundLogin});
    background-repeat: no-repeat;
    // height: 30vw;
    height: 50vw;
    margin: auto;
    width: 50%;
    background-size: 100%;
    object-fit: cover;

    @media only screen and (max-width: 1050px) {
    background: #f8fae4;
       width: 50%;
       height: auto;
    }

    @media only screen and (max-width: 750px) {
           width: auto;
           margin: 0px 20px;
        }

    // &::before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 10px;
    //     background: url(${frontImg});
        
    // }
`;


export const Title = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 45.022px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.285px;

    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       font-size: 32px;
    }

    @media only screen and (max-width: 640px) {
        font-size: 28px;
        text-align: center;
     }
`;

export const Title2 = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 25.022px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.285px;

    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       font-size: 22px;
    }
`;
export const Title3 = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 25.022px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.285px;
    margin-left: 30px;
    margin-top: 50px;



    @media only screen and (max-width: 1444px) {
        margin-top: 20px;
     }


    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       font-size: 22px;
       margin-top: 0px;
    }
`;


export const Container = styled.div`
    height: auto;
    width: 100%;
    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
`;