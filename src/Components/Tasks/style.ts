import { styled } from "styled-components";
import backgroundBody from "../../assets/images/SubtractBody.png";
import backgroundBodyDown from "../../assets/images/backgroundTasks.png";
import rows from "../../assets/images/rows.png";
import iconPdf from "../../../public/icon_download.png"

import styles from "../../Style";

export const Container = styled.div`
    height: auto;
    width: 100%;
    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
`;

export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* Adicione estilos personalizados aqui */
`;

export const CustomButton = styled.button`
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s; /* Transição suave para a mudança de cor de fundo */

    /* Estilos de hover */
    &:hover {
        background-color: #0056b3; /* Cor de fundo diferente quando o mouse passar por cima */
    }
`;

export const TextName = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    height: 20px;
    padding: 15px;
    border-radius: 12px;
    border: 3px solid #83C2E2;
    background: var(--primary-gray-10, #FFF);
    width: auto;
    
`;





// export const Icon_pdf = styled.div`
//     background: url(${iconPdf});
//     background-repeat: no-repeat;
//     width: 20%;
//     background-size: 30%;
//     object-fit: cover;
// `;