import { styled } from "styled-components";
import styles from "../../../Style";


export const Question = styled.p`
    color: #000;
    font-family: ${styles.typography.types.inter};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    /* line-height: 10px; */
    /* letter-spacing: 0.05px; */

    @media only screen and (max-width: 1070px) {
        font-size: 16px;
        margin: auto 46px 19px -2px;
          
    }
    @media only screen and (max-width: 1100px) {
        font-size: 14px;          
    }
    @media only screen and (max-width: 1070px) {
        text-align: center;
        margin-right: 1px;  
        margin-top: 15px;       
    }

      
`;