import { styled } from "styled-components";


export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
    /* grid-template-columns: 70% 30%; */
    @media only screen and (max-width: 700px) {
       display: flex;
       flex-direction: column;
    }
`;