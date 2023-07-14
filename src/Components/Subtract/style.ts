import { styled } from "styled-components";
import background from "../../assets/images/Subtract.svg";
import backgroundJournal from "../../assets/images/journal.svg";


export const Background = styled.div`
    background-image: url(${background});
    background-size: 100%;
    height: 100%;
    width: 100%;
    background-size: 80%;
    background-repeat: no-repeat;
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* img{
        width: 20%;
    } */

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
    
    width: 70%;
    @media only screen and (max-width: 700px) {
      width: 100%;
    }
`;