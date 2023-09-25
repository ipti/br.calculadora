import { styled } from "styled-components";
import styles from "../../Style";

export const ButtonStyle = styled.button<{ $primary?: boolean; }>`
    border: none;
    cursor: url("/cursor_header.png"), pointer;
    margin-right: 8px;
    background-color: ${styles.colors.green};
    padding: 10px;
    border-radius: 16px;
    font-family: ${styles.typography.types.daleRegular};
    color: white;
    background-color: ${props => props.$primary === true ? styles.colors.green : props.$primary === false ? styles.colors.gray : '#4F5683'};
    `;
