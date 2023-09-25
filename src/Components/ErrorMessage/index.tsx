import React from "react";
import { ErrorMessageContainer } from "./style"; // Importe os estilos


interface ErrorMessageProps {
    errorMessage: string | null;
    type?: "error" | "confirmation";
}


const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage, type }) => {
    if (!errorMessage) {
        return null;
    }

    return (
        <ErrorMessageContainer type={type}>
            <p>{errorMessage}</p>
        </ErrorMessageContainer>
    );
};


export default ErrorMessage;