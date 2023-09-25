import React from "react";
import backgroundBodyError from "../../assets/images/errorBackground.png";
import { NotFoundContainer, NotFoundImage, NotFoundText } from './style'; // Importe os estilos

function NotFound() {
    return (
        <NotFoundContainer>
            <NotFoundImage src={backgroundBodyError} alt="Imagem de página não encontrada" />
        </NotFoundContainer>
    );
}

export default NotFound;