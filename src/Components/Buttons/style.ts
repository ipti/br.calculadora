import { styled } from "styled-components";
import styles from "../../Style";

export const ButtonStyle = styled.button<{ $primary?: boolean; }>`
    border: none;
    cursor: pointer;
    background-color: ${styles.colors.green};
    padding: 10px;
    border-radius: 16px;
    background-color: ${props => props.$primary ? styles.colors.green : styles.colors.gray};
`;