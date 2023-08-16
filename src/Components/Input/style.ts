import { styled } from "styled-components";
import styles from "../../Style";

export const InputStyle = styled.input`
    margin: auto;
    height: 20px;
    padding: 10px;
    border-radius: 12px;
    border: 3px solid #83C2E2;
    background: var(--primary-gray-10, #FFF);
    width: ${props => props.width ? props.width : "auto"};
`;

type PropsSize = {
    width?: string
}

export const Text = styled.div`
    color: #023047;
    font-family: ${styles.typography.types.inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 0.08px;
`;

export const Size = styled.div<PropsSize>`
   width: ${props => props.width ? props.width : "auto"};
   margin: 0 4px;
`;