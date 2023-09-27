import { styled } from "styled-components";
import styles from "../../Style";

export const InputStyle = styled.input`
    margin: auto;
    height: 20px;
    padding: 12px;
    border-radius: 12px;
    border: 3px solid #83C2E2;
    cursor: url("/cursor_input.png"), text;
    background: var(--primary-gray-10, #FFF);
    width: ${props => props.width ? props.width : "auto"};
    
    @media only screen and (max-width: 1444px) {
        max-width: 320px;
        // height:0px;
     }
     
    @media only screen and (max-width: 800px) {
        max-width: 200px;
 
     }

    @media only screen and (max-width: 750px) {
       max-width: 100%;

    }
    @media only screen and (max-width: 560px) {
        max-width: 220px;
     }

     @media only screen and (max-width: 357px) {
        max-width: 120px;
     }
`;

type PropsSize = {
    width?: string
}

export const Text = styled.div<PropsSize>`
    color: black;
    font-family: ${styles.typography.types.inter};
    font-size: 11px;
    font-style: normal;
    font-weight: bold;
    line-height: 20px; /* 125% */
    cursor: url("/cursor_input.png"), text;
    letter-spacing: 0.08px;

    @media only screen and (max-width: 1309px) {
        font-size: 10px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 9px;
    }
    @media only screen and (max-width: 450px) {
        font-size: 7px;
    }
`;

export const Size = styled.div<PropsSize>`
   /* width: auto; */
   width: auto;
   margin-right: ${props => props.width ? 100 % - props.width : 0};
   margin: 0 4px;
`;