import { styled } from "styled-components";
import styles from "../../Style";

export const ButtonStyle = styled.button`
    border: none;
    cursor: pointer;
    background-color: ${styles.colors.green};

    #primary {
        background-color: ${styles.colors.green};
    }
    #secondary {
        background-color: ${styles.colors.gray};
    }
    
`;