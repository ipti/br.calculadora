import styled, { keyframes } from 'styled-components';
import background_tasks from "../../assets/images/backgroundTasks.png"
import styles from "../../Style";

// Defina a animação keyframes
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Estilos para a classe .float-image
export const FloatImage = styled.img`
  position: absolute;
  top: -10px;
  right: 0px;
  animation: ${floatAnimation} 1s ease infinite;
  width: 30%;
`;

// Estilos para a classe .result-card-container
export const ResultCardContainer = styled.div`
  background: url(${background_tasks});
  position: relative;
  background-size: 90% 90%;
  background-position: center;
  background-repeat: no-repeat;
  /* border: 1px solid red; */
  padding: 50px;
  /* margin: 107px; */
  display: inline-block;
  width: calc(33.33% - 20px);
  box-sizing: border-box;

  @media only screen and (max-width: 915px) {
    width: calc(51.33% - 20px);
 }
 @media only screen and (max-width: 600px) {
  width: calc(100% - 20px);

  @media only screen and (max-width: 350px) {
    margin-top: 40px;

  }
}
`;

// Estilos para a classe .result-card
export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid #ccc; */
    text-align: center;
`;


export const ResultCardHeading = styled.h3`
    font-family: ${styles.typography.types.daleRegular};
    color: #4F5683;
    font-size: 25.42px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.285px;
    margin-bottom: 0px;

    @media only screen and (max-width: 1100px) {
       display: flex;
       flex-direction: column;
    }
`;


export const ResultCardParagraph = styled.p`
  font-size: 1em;
`;

// Estilos para a tag img dentro de .result-card
export const ResultCardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

// Estilos para a tag ul dentro de .result-card
export const ResultCardList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Estilos para a tag li dentro de .result-card
export const ResultCardListItem = styled.li`
  margin-bottom: 5px;


  font-family: ${styles.typography.types.daleRegular};
  color: #4F5683;
  font-size: 15.6px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.285px;
`;
