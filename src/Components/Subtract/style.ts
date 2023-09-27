import { styled } from "styled-components";
import backgroundBody from "../../assets/images/SubtractBody.png";
import backgroundBodyDown from "../../assets/images/SubtractParte2.png";
import backgroundRespons from "../../assets/images/backgroundRespons.png";
import rows from "../../assets/images/rows.png";


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

    @media only screen and (max-width: 350px) {
        font-size: 39.022px;
     }

`;

export const Title = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 45.022px;
    font-style: normal;
    font-weight: 400;
    line-height: 98.766px; /* 75% */
    letter-spacing: 0.285px;

   
    @media only screen and (max-width: 1309px) {
        font-size: 38.022px;
     }

    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       font-size: 32px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 26px;
     }

    @media only screen and (max-width: 280px) {
        font-size: 21px;
     }

    
`;

export const CustomRow = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-left:15px;
`;

export const TitleSmall = styled.div`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.766px;
    letter-spacing: 0.285px;

    @media only screen and (max-width: 1309px) {
        display: flex;
        font-size: 27px;
    margin-top: -11px;
     }
     
     
    @media only screen and (max-width: 1070px) {
       display: flex;
       flex-direction: column;
       font-size: 24px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 18px;
     }
     @media only screen and (max-width: 400px) {
        font-size: 16px;
     }
     @media only screen and (max-width: 280px) {
        font-size: 14px;
     }
`;


export const BackgroundBody = styled.div`
    border-radius: 49px;
    background: url(${backgroundBody});
    background-size: 100%;
    height: auto;
    margin-top: 30px;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: cover;

    @media only screen and (max-width:  1222px) {
        height: auto;
        margin-top: 30px;
        width: 100%;
     }

       @media only screen and (max-width: 1070px) {
       background: #f8fae4;
       width: auto;
    }
 

     @media only screen and (max-width: 600px) {
        width: auto;    
        margin-right: 20px; 
    
    }
    @media only screen and (max-width: 600px) {
        margin-right: 5px;   
    
    }

`;

export const BackgroundBodyDown = styled.div`
    border-radius: 49px;
    background: url(${backgroundBodyDown});
    background-size: 100%;
    height: auto;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 0px;
    object-fit: cover;
    @media only screen and (max-width: 1070px) {
       background: #f8fae4;
       width: auto;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;    
        margin-right: 20px; 
    
    }
`;



export const Rows = styled.div`
    // background: url(${rows});
    background-size: 100%;
    height: auto;
    margin: 2% auto;
    max-height: 80%;

    width: 100%;
    background-size: 100%;
    object-fit: cover;

    @media only screen and (max-width: 350px) {
        margin: 0% -20px;
    }

`;




export const Container = styled.div`
    height: auto;
    width: 70%;
    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
`;

export const RowRed = styled.div`
    width: 1px;
    // background: red; 
    margin-left: 8%;

     @media only screen and (max-width: 1070px) {
      margin-top: 8%;
      width: 100%;
      height: 1px;
      margin-left: 0;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 10%;
      width: 100%;
      height: 1px;
      margin-left: 0;
    }
    
`;